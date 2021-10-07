import { fetch } from "../util";

import { BaseResponse, ErrorCode, Season } from "..";
import type { WithApiShard } from "../types/util";

export interface SeasonOptions extends WithApiShard {}

/**
 * Get data on a specified season. Whether current or a player(s)
 * By default will fetch the current season
 *
 * @param {Object} options - Season Options
 */
export async function useSeason({ ...rest }: SeasonOptions) {
  try {
    const allSeasons = await useSeasons({
      ...rest,
    });

    return allSeasons.data.find((season) => season.attributes.isCurrentSeason);
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_SEASON, error);
    throw error;
  }
}

export interface SeasonsOptions extends WithApiShard {}

export interface SeasonsResponse extends BaseResponse {
  /**
   * An array of available seasons
   */
  data: Array<Season>;
}

/**
 * Get an array of all seasons of a provided shard
 *
 * @param {Object} options - Seasons Options
 */
export async function useSeasons(options: SeasonsOptions) {
  try {
    return await fetch<SeasonsResponse>({
      ...options,
      endpoint: "seasons",
    });
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_SEASONS, error);
    throw error;
  }
}
