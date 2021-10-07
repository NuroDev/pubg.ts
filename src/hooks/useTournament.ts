import { ErrorCode } from "..";
import { fetch } from "../util";

import type { BaseResponse, Tournament } from "..";
import type { WithApiShard } from "../types/util";

export interface TournamentOptions extends WithApiShard {
  /**
   * Tournament ID
   */
  id?: string;
}

export interface TournamentResponse extends BaseResponse {
  /**
   * @see https://documentation.pubg.com/en/tournaments-endpoint.html
   */
  data: Array<Tournament>;
}

/**
 * Gets all or a specific tournament using a provided match id
 *
 * @todo
 *
 * @param {Object} options - Tournament Options
 */
export async function useTournament({ id, ...rest }: TournamentOptions) {
  try {
    const endpoint = id ? `tournaments/${id}` : "tournaments";

    /**
     * @todo Validate response types
     */
    return await fetch<TournamentResponse>({
      ...rest,
      endpoint,
    });
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_TOURNAMENT, error);
    throw error;
  }
}
