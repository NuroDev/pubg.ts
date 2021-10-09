import { ErrorCode } from "..";
import { fetch } from "../util";

import type { ApiTournament, BaseResponse, Tournament } from "..";
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
  data: Array<ApiTournament>;
}

export type TournamentResponse = Array<Tournament>;

/**
 * Gets all or a specific tournament using a provided match id
 *
 * @param {Object} options - Tournament Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.id] - Tournament ID
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function useTournament({
  apiKey,
  id,
  shard,
}: TournamentOptions): Promise<TournamentResponse> {
  try {
    const endpoint = id ? `tournaments/${id}` : "tournaments";

    /**
     * @todo Validate response types
     */
    const { data } = await fetch<ApiTournamentResponse>({
      apiKey,
      endpoint,
      root: true,
      shard,
    });

    return data.map(({ attributes, id, type }) => ({
      createdAt: attributes.createdAt,
      id,
      type,
    }));
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_TOURNAMENT, error);
    throw error;
  }
}
