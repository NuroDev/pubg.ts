import { fetch } from "../util";

import type { BaseResponse } from "..";
import type { WithApiShard } from "../types/util";

export interface TelemetryOptions extends WithApiShard {}

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
