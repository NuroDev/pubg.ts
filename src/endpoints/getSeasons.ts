import { fetch } from "../util";

import type { ApiSeason, BaseResponse, Result, Season } from "..";
import type { WithApiShard } from "../types/util";

export interface SeasonsOptions extends WithApiShard {}

interface ApiSeasonsResponse extends BaseResponse {
  /**
   * An array of available seasons
   *
   * @see https://documentation.pubg.com/en/seasons-endpoint.html
   */
  data: Array<ApiSeason>;
}

/**
 * An promised array of available seasons
 *
 * @see https://documentation.pubg.com/en/seasons-endpoint.html
 */
export type SeasonsResponse = Result<Array<Season>>;

/**
 * Get an array of all seasons of a provided shard
 *
 * @param {Object} options - Seasons Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function getSeasons(options: SeasonsOptions): SeasonsResponse {
  const response = await fetch<ApiSeasonsResponse>({
    ...options,
    endpoint: "seasons",
  });

  if (response.error) return response;

  const { data } = response.data;

  return {
    data: data.map(({ attributes, id, type }) => ({
      id,
      isCurrentSeason: attributes.isCurrentSeason,
      isOffseason: attributes.isOffseason,
      type,
    })),
    error: null,
  };
}
