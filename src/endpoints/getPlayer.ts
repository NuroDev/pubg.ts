import { chunkify, fetch } from "../util";

import type {
  ApiPlayer,
  BaseResponse,
  Player,
  PromiseResult,
  Result,
} from "..";
import type { FetchOptions } from "../util";
import type { WithApiShard } from "../types/util";

export interface PlayerOptions extends WithApiShard {
  /**
   * Whether the provided value(s) are ID's, not player names
   */
  id?: boolean;

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
export type PlayerResponse = PromiseResult<Player | Array<Player>>;

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
  value,
  ...rest
}: PlayerOptions): PlayerResponse {
  const isArray = Array.isArray(value);

  const endpoint = !isArray && id ? `players/${value}` : "players";

  const fetchOptions: FetchOptions | Array<FetchOptions> = isArray
    ? chunkify(value).map((chunk) => ({
        ...rest,
        endpoint,
        params: {
          [`filter[${id ? "playerIds" : "playerNames"}]`]: chunk.join(","),
        },
      }))
    : {
        ...rest,
        endpoint,
        params: id
          ? undefined
          : {
              "filter[playerNames]": value,
            },
      };

  const response = await fetch<
    ApiPlayerResponse,
    Result<ApiPlayerResponse> | Array<Result<ApiPlayerResponse>>
  >(fetchOptions);

  if (!Array.isArray(response)) {
    if (response.error) return response;

    const { data } = response.data;
    const player = Array.isArray(data) ? data[0] : data;

    return {
      data: {
        ...player.attributes,
        assets: player.relationships.assets.data,
        id: player.id,
        matches: player.relationships.matches.data,
        type: player.type,
      },
      error: null,
    };
  }

  response.forEach((res) => {
    if (res.error) return res;

    return;
  });

  const data = response
    .map(({ data }) => data?.data)
    .flat() as Array<ApiPlayer>;

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
