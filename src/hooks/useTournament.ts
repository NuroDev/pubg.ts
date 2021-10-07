import { fetch } from "../util";

import { BaseResponse, ErrorCode } from "..";
import type { WithApiShard } from "../types/util";

export interface TournamentOptions extends WithApiShard {}

export interface TournamentResponse extends BaseResponse {}

/**
 * Gets all or a specific tournament using a provided match id
 *
 * @todo
 *
 * @param {Object} options - Tournament Options
 */
export async function useTournament({ ...rest }: TournamentOptions) {
  try {
    return await fetch<TournamentResponse>({
      ...rest,
      endpoint: "",
    });
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_TOURNAMENT, error);
    throw error;
  }
}
