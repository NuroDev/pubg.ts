import { fetch } from "../util";

import { BaseResponse, ErrorCode, Match, Participant, Roster } from "..";
import type { WithApiShard } from "../types/util";

export interface MatchOptions extends WithApiShard {
  /**
   * The match ID
   */
  id: string;
}

interface MatchResponse extends BaseResponse {
  /**
   * Data about a complete match.
   * This includes data such as the gamemode played, duration, participated players, etc
   *
   * @see https://documentation.pubg.com/en/matches-endpoint.html
   */
  data: Match;
  included: Array<Roster | Participant>;
}

/**
 * Get a match from a specificed match id
 *
 * @param {Object} options - Match Options
 */
export async function useMatch({ id, ...rest }: MatchOptions) {
  try {
    return await fetch<MatchResponse>({
      ...rest,
      endpoint: `matches/${id}`,
    });
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_MATCH, error);
    throw error;
  }
}
