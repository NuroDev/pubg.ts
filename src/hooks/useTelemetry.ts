import { fetch } from "../util";

import type { BaseResponse } from "..";
import type { WithApiKey, WithShard } from "../types/util";

export interface TelemetryOptions extends WithApiKey, WithShard {}

interface TelemetryResponse extends BaseResponse {}

/**
 * Fetches telemetry data
 *
 * @param {Object} options - Telemetry Options
 */
export async function useTelemetry({ ...rest }: TelemetryOptions) {
  try {
    return await fetch<TelemetryResponse>({
      ...rest,
      endpoint: "",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
