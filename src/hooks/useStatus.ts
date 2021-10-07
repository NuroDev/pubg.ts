import { fetch } from "../util";

import { ErrorCode } from "..";
import type { WithApiKey } from "../types/util";

export interface StatusOptions extends WithApiKey {}

export interface StatusResponse {
  data: {
    id: string;
    type: "status";
  };
}

/**
 * Gets the status of the API
 *
 * @param {Object} options - Status Options
 */
export async function useStatus({ apiKey }: StatusOptions) {
  try {
    return await fetch<StatusResponse>({
      apiKey,
      endpoint: "status",
      root: true,
    });
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_STATUS, error);
    throw error;
  }
}
