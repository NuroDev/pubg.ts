import { fetch } from "../util";

import { BaseResponse, ErrorCode } from "..";
import type { WithApiShard } from "../types/util";

export interface TelemetryOptions extends WithApiShard {}

export interface TelemetryResponse extends BaseResponse {}

/**
 * Fetches telemetry data
 *
 * @todo
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
    console.error(ErrorCode.HOOK_FETCH_TELEMETRY, error);
    throw error;
  }
}
