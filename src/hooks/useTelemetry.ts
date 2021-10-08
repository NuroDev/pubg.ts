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

interface ApiTelemetryResponse extends BaseResponse {}

/**
 * @todo Mutate final resulting data structure
 */
export type TelemetryResponse = Promise<{}>;

/**
 * Fetches telemetry data from a provided URL
 *
 * @todo Test this functions correctly
 *
 * @param {Object} options - Telemetry Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string} options.url - URL of the telemetry object
 */
export async function useTelemetry({
  apiKey,
  url,
}: TelemetryOptions): TelemetryResponse {
  try {
    const { data }: AxiosResponse<ApiTelemetryResponse> = await axios(url, {
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
