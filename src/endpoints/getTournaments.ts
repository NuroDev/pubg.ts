import { ErrorCode } from "..";
import { fetch } from "../util";

import type { ApiTournaments, BaseResponse, Tournament, Tournaments } from "..";
import type { WithApiKey } from "../types/util";

export interface TournamentsOptions extends WithApiKey {}

interface ApiTournamentsResponse extends BaseResponse {
  /**
   * @see https://documentation.pubg.com/en/tournaments-endpoint.html
   */
  data: Array<ApiTournaments>;
}

export type TournamentsResponse = Promise<Tournament | Array<Tournaments>>;

/**
 * Gets all tournaments
 */
export async function getTournaments({
  apiKey,
}: TournamentsOptions): TournamentsResponse {
  try {
    const { data } = await fetch<ApiTournamentsResponse>({
      apiKey,
      endpoint: "tournaments",
      root: true,
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
