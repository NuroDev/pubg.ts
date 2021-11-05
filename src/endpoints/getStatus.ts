import { fetch } from "../util";

import type { ResponseObjectType, Result } from "..";
import type { WithApiKey } from "../types/util";

export interface StatusOptions extends WithApiKey {}

interface ApiStatusResponse {
  /**
   * The current status of the API
   *
   * @see https://documentation.pubg.com/en/samples-endpoint.html
   */
  data: {
    id: string;
    type: ResponseObjectType.STATUS;
  };
}

/**
 * The current status of the API
 *
 * @see https://documentation.pubg.com/en/samples-endpoint.html
 */
export type StatusResponse = Result<{
  id: string;
  type: ResponseObjectType.STATUS;
}>;

/**
 * Gets the status of the API
 *
 * @param {Object} options - Status Options
 * @param {string} options.apiKey - PUBG Developer API key
 */
export async function getStatus({ apiKey }: StatusOptions): StatusResponse {
  const response = await fetch<ApiStatusResponse>({
    apiKey,
    endpoint: "status",
    root: true,
  });

  if ("error" in response) return response;

  return response.data;
}
