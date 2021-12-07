import { chunkify, fetchAll } from "../util";

import type { ApiPlayer, BaseResponse, Player, PromiseResult } from "..";
import type { WithApiShard } from "../types/util";

export interface PlayerOptions extends WithApiShard {
  /**
   * Whether the provided value(s) are ID's, not player names
   */
  id?: boolean;

  /**
   * Throw an error if not all players are returned / found
   *
   * By default this will throw an error if the length of the array of player names / id's
   * and length of response data objects are not the same.
   * This is because if you provide a valid & invalid name to the PUBG api it will return the valid
   * name & swallow the invalid name with no errors or warnings.
   *
   * @default false
   */
  skipFailed?: boolean;

  /**
   * Player or array of players to fetch
   */
  value: string | Array<string>;
}

interface ApiPlayerResponse extends BaseResponse {
  /**
   * Player(s) data & their recent matches (Up to 14 days old)
   *
   * @see https://documentation.pubg.com/en/players-endpoint.html/
   */
  data: ApiPlayer | Array<ApiPlayer>;
}

/**
 * Player(s) data & their recent matches (Up to 14 days old)
 *
 * @see https://documentation.pubg.com/en/players-endpoint.html/
 */
export type PlayerResponse = PromiseResult<Array<Player>>;

/**
 * Get player(s) by a given name(s) or id(s)
 *
 * @param {Object} options - Player Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {boolean} options.id - Whether the provided value(s) are ID's, not player names
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string | Array} - Player or array of players to fetch
 */
export async function getPlayer({
  id = false,
  skipFailed = false,
  value,
  ...rest
}: PlayerOptions): PlayerResponse {
  const isArray = Array.isArray(value);

  const endpoint = !isArray && id ? `players/${value}` : "players";

  const options = isArray
    ? chunkify([...value]).map((chunk) => ({
        ...rest,
        endpoint,
        params: {
          [`filter[${id ? "playerIds" : "playerNames"}]`]: chunk.join(","),
        },
      }))
    : [
        {
          ...rest,
          endpoint,
          params: id
            ? undefined
            : {
                "filter[playerNames]": value,
              },
        },
      ];

  const responses = await fetchAll<ApiPlayerResponse>(options);

  const error = responses.find((res) => res.error !== null);
  if (error && error.error) return error;

  const data = responses.map(({ data }) => data!.data).flat();

  if (!skipFailed) {
    if (isArray && value.length !== data.length) {
      return {
        data: null,
        error: {
          title: "Failed data length validation",
          detail: `Input array length does not match response length. Players missing: ${value
            .filter(
              (v) =>
                data.map(({ attributes }) => attributes.name).indexOf(v) === -1
            )
            .join(", ")}`,
        },
        status: 400,
      };
    }
  }

  return {
    data: data.map(({ attributes, id, relationships, type }) => ({
      ...attributes,
      assets: relationships.assets.data,
      id,
      matches: relationships.matches.data,
      type,
    })),
    error: null,
  };
}
