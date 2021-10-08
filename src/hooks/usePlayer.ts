import { ErrorCode } from "..";
import { fetch } from "../util";

import type { BaseResponse, Player } from "..";
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
  data: Array<Player>;
}

/**
 * Player(s) data & their recent matches (Up to 14 days old)
 *
 * @see https://documentation.pubg.com/en/players-endpoint.html/
 */
export type PlayerResponse = Promise<Player | Array<Player>>;

/**
 * Get player(s) by a given name(s) or id(s)
 *
 * @param {Object} options - Player Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {boolean} options.id - Whether the provided value(s) are ID's, not player names
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string | Array} - Player or array of players to fetch
 */
export async function usePlayer({
  id = false,
  value,
  ...rest
}: PlayerOptions): PlayerResponse {
  const isArray = Array.isArray(value);

  const endpoint = !isArray && id ? `players/${value}` : "players";

  const params = id
    ? isArray
      ? { "filter[playerIds]": value.join(",") }
      : undefined
    : {
        "filter[playerNames]": isArray ? value.join(",") : value,
      };

  try {
    const { data } = await fetch<ApiPlayerResponse>({
      ...rest,
      endpoint,
      params,
    });

    return data;
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_PLAYER, error);
    throw error;
  }
}
