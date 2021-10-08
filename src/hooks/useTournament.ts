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

interface ApiTournamentResponse extends BaseResponse {
  /**
   * @see https://documentation.pubg.com/en/tournaments-endpoint.html
   */
  data: Array<Tournament>;
}

export type TournamentResponse = Array<Tournament>;

/**
 * Gets all or a specific tournament using a provided match id
 *
 * @todo Test this functions correctly
 *
 * @param {Object} options - Tournament Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string | undefined} [options.id] - Tournament ID
 */
export async function useTournament({
  id,
  ...rest
}: TournamentOptions): Promise<TournamentResponse> {
  try {
    const endpoint = id ? `tournaments/${id}` : "tournaments";

    /**
     * @todo Validate response types
     */
    const { data } = await fetch<ApiTournamentResponse>({
      ...rest,
      endpoint,
    });

    return data;
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_TOURNAMENT, error);
    throw error;
  }
}
