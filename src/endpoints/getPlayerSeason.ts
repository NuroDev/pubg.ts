import { ErrorCode } from "..";
import { fetch } from "../util";

import type { BaseResponse } from "..";
import type { WithApiShard } from "../types/util";

export interface PlayerSeasonOptions extends WithApiShard {}

interface ApiPlayerSeasonResponse extends BaseResponse {}

export type PlayerSeasonResponse = Promise<{}>;

/**
 * Get data for a single season of a player(s) by a given id or name
 *
 * @param {Object} options - Player Season Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function getPlayerSeason({
  ...rest
}: PlayerSeasonOptions): PlayerSeasonResponse {
  try {
    const {} = await fetch<ApiPlayerSeasonResponse>({
      ...rest,
      endpoint: "",
    });

    return {};
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_PLAYER_SEASON, error);
    throw error;
  }
}
