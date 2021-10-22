import { ErrorCode } from "..";
import { fetch } from "../util";

import type { ApiMatch, BaseResponse, Match, Participant, Roster } from "..";
import type { WithApiShard } from "../types/util";

export interface MatchOptions extends WithApiShard {
  /**
   * Match ID
   */
  id: string;
}

interface ApiMatchResponse extends BaseResponse {
  /**
   * Data about a complete match
   *
   * This includes data such as the gamemode played, duration, participated players, etc
   *
   * @see https://documentation.pubg.com/en/matches-endpoint.html
   */
  data: ApiMatch;

  /**
   * An array of all participants & rosters who took part in the game
   */
  included: Array<Participant | Roster>;
}

export type MatchResponse = Promise<Match>;

/**
 * Get a match from a specificed match id
 *
 * @param {Object} options - Match Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string} options.id - Match ID
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function getMatch({ id, ...rest }: MatchOptions): MatchResponse {
  try {
    const { data, included } = await fetch<ApiMatchResponse>({
      ...rest,
      endpoint: `matches/${id}`,
    });

    return {
      ...data.attributes,
      assets: data.relationships.assets.data,
      id: data.id,
      members: included,
      type: data.type,
    };
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_MATCH, error);
    throw error;
  }
}
