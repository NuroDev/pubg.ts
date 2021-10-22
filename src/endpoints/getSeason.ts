import { getSeasons } from ".";
import { ErrorCode } from "..";

import type { Season } from "..";
import type { WithApiShard } from "../types/util";

export interface SeasonOptions extends WithApiShard {
  /**
   * Season ID
   */
  id?: string;
}

export type SeasonResponse = Promise<Season | undefined>;

/**
 * Get data on a specified season. Whether current or a player(s)
 *
 * By default will fetch the current season
 *
 * @param {Object} options - Season Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.id] - Season ID
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function getSeason({
  id,
  ...rest
}: SeasonOptions): SeasonResponse {
  try {
    const seasons = await getSeasons({
      ...rest,
    });

    return seasons.find((season) =>
      id ? id === season.id : season.isCurrentSeason
    );
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_SEASON, error);
    throw error;
  }
}
