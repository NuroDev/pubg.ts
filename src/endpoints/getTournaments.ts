import { fetch } from "../util";

import type {
  ApiTournaments,
  BaseResponse,
  Result,
  Tournament,
  Tournaments,
} from "..";
import type { WithApiKey } from "../types/util";

export interface TournamentsOptions extends WithApiKey {}

interface ApiTournamentsResponse extends BaseResponse {
  /**
   * @see https://documentation.pubg.com/en/tournaments-endpoint.html
   */
  data: Array<ApiTournaments>;
}

export type TournamentsResponse = Result<Tournament | Array<Tournaments>>;

/**
 * Gets all tournaments
 */
export async function getTournaments({
  apiKey,
}: TournamentsOptions): TournamentsResponse {
  const response = await fetch<ApiTournamentsResponse>({
    apiKey,
    endpoint: "tournaments",
    root: true,
  });

  if (response.error) return response;

  const { data } = response.data;

  return {
    data: data.map(({ attributes, id, type }) => ({
      createdAt: attributes.createdAt,
      id,
      type,
    })),
    error: null,
  };
}
