import { fetch } from "~/util";

import type { BaseResponse, Module, Result, WithApiShard } from "~/util/types";
import type {
  ApiMatch,
  Match,
  Participant,
  Roster,
} from "~/modules/match/match.types";

export interface MatchOptions extends WithApiShard {
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

/**
 * @name `getMatch`
 *
 * @description Get a match from a specificed match id
 *
 * @param {String} options.apiKey - PUBG Developer API key
 * @param {String} options.id - Match ID
 * @param {String} [options.shard="Steam"] - Platform Shard
 */
export const getMatch: Module<MatchOptions, Result<Match>> = async ({
  id,
  ...rest
}) => {
  const response = await fetch<ApiMatchResponse>({
    ...rest,
    endpoint: `matches/${id}`,
  });

  if (response.error) return response;

  const { data, included } = response.data;

  return {
    data: {
      ...data.attributes,
      assets: data.relationships.assets.data,
      id: data.id,
      members: included,
      type: data.type,
    },
    error: null,
  };
};
