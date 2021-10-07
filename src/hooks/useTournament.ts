import { fetch } from "../util";

import type { BaseResponse } from "..";
import type { WithApiShard } from "../types/util";

export interface TournamentOptions extends WithApiShard {}

interface TournamentResponse extends BaseResponse {}

/**
 * Gets all or a specific tournament using a provided match id
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
    console.error(error);
    throw error;
  }
}
