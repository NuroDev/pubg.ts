import { ErrorCode } from "..";
import { fetch } from "../util";

import type { BaseResponse, Season } from "..";
import type { WithApiShard } from "../types/util";

export interface SeasonsOptions extends WithApiShard {}

interface ApiSeasonsResponse extends BaseResponse {
  /**
   * An array of available seasons
   *
   * @see https://documentation.pubg.com/en/seasons-endpoint.html
   */
  data: Array<Season>;
}

/**
 * An promised array of available seasons
 *
 * @see https://documentation.pubg.com/en/seasons-endpoint.html
 */
export type SeasonsResponse = Promise<Array<Season>>;

/**
 * Get an array of all seasons of a provided shard
 *
 * @param {Object} options - Seasons Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function useSeasons(options: SeasonsOptions): SeasonsResponse {
  try {
    const { data } = await fetch<ApiSeasonsResponse>({
      ...options,
      endpoint: "seasons",
    });

    return data;
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_SEASONS, error);
    throw error;
  }
}
