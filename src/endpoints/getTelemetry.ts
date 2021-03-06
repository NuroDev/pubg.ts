import axios from "axios";

import { BASE_HEADERS } from "../constants";

import type { AxiosResponse } from "axios";

import type { BaseResponse, Telemetry } from "..";
import type { WithApiKey } from "../types/util";

export interface TelemetryOptions extends WithApiKey {
  /**
   * URL of the telemetry object
   */
  url: string;
}

interface ApiTelemetryResponse extends BaseResponse {}

export type TelemetryResponse = Promise<Telemetry>;

/**
 * Fetches telemetry data from a provided URL
 *
 * @param {Object} options - Telemetry Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 * @param {string} options.url - URL of the telemetry object
 */
export async function getTelemetry({
  apiKey,
  url,
}: TelemetryOptions): TelemetryResponse {
  const response: AxiosResponse<ApiTelemetryResponse> = await axios(url, {
    headers: {
      ...BASE_HEADERS,
      Authorization: `Bearer ${apiKey}`,
    },
    responseType: "json",
  });

  if ("error" in response) return response;

  return response.data;
}
