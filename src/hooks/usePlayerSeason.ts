import { fetch } from "../util";

import type { BaseResponse } from "..";
import type { WithApiShard } from "../types/util";

export interface PlayerSeasonOptions extends WithApiShard {}

interface PlayerSeasonResponse extends BaseResponse {}

/**
 * Get data for a single season of a player(s) by a given id or name
 *
 * @param {Object} options - Player Season Options
 */
export async function usePlayerSeason({ ...rest }: PlayerSeasonOptions) {
  try {
    return await fetch<PlayerSeasonResponse>({
      ...rest,
      endpoint: "",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
