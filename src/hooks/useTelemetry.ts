import axios from "axios";

import { BASE_HEADERS } from "../constants";
import { ErrorCode } from "..";

import type { AxiosResponse } from "axios";

import type { BaseResponse } from "..";
import type { WithApiKey } from "../types/util";

export interface TelemetryOptions extends WithApiKey {
  /**
   * URL of the telemetry object
   */
  url: string;
}

export interface TelemetryResponse extends BaseResponse {}

/**
 * Fetches telemetry data from a provided URL
 *
 * @todo Test this functions correctly
 *
 * @param {Object} options - Telemetry Options
 */
export async function useTelemetry({ apiKey, url }: TelemetryOptions) {
  try {
    const { data }: AxiosResponse<TelemetryResponse> = await axios(url, {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${apiKey}`,
      },
      responseType: "json",
    });

    return data;
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_TELEMETRY, error);
    throw error;
  }
}
