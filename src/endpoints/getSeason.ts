import { getSeasons } from ".";

import type { Result, Season } from "..";
import type { WithApiShard } from "../types/util";

export interface SeasonOptions extends WithApiShard {
  /**
   * Season ID
   */
  id?: string;
}

export type SeasonResponse = Result<Season | undefined>;

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
  // TODO: Pass through override error code
  const seasons = await getSeasons({
    ...rest,
  });

  if (seasons.error) return seasons;

  return {
    data: seasons.data.find((season) =>
      id ? id === season.id : season.isCurrentSeason
    ),
    error: null,
  };
}
