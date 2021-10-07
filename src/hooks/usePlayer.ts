import { fetch } from "../util";

import type { BaseResponse, Player } from "..";
import type { WithApiKey, WithShard } from "../types/util";

export interface PlayerOptions extends WithApiKey, WithShard {
  /**
   * Whether the provided value(s) are ID's, not player names
   */
  id?: boolean;
  /**
   * Value or array of values to fetch
   */
  value: string | Array<string>;
}

interface PlayerResponse extends BaseResponse {
  /**
   * Data about a player & their recent matches (Up to 14 days old)
   *
   * @see https://documentation.pubg.com/en/players-endpoint.html/
   */
  data: Array<Player>;
}

/**
 * Get player(s) by a given name(s) or id(s)
 *
 * @param {Object} options - Player Options
 */
export async function usePlayer({ id = false, value, ...rest }: PlayerOptions) {
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
    return await fetch<PlayerResponse>({
      ...rest,
      endpoint,
      params,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
