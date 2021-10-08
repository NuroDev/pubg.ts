import { ErrorCode, ResponseObjectType } from "..";
import { fetch } from "../util";

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
export type StatusResponse = Promise<{
  id: string;
  type: ResponseObjectType.STATUS;
}>;

/**
 * Gets the status of the API
 *
 * @param {Object} options - Status Options
 * @param {string} options.apiKey - PUBG Developer API key
 */
export async function useStatus({ apiKey }: StatusOptions): StatusResponse {
  try {
    const { data } = await fetch<ApiStatusResponse>({
      apiKey,
      endpoint: "status",
      root: true,
    });

    return data;
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_STATUS, error);
    throw error;
  }
}
