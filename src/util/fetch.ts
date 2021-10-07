import axios from "axios";

import { BASE_HEADERS, BASE_URL } from "../constants";
import { ErrorCode, Shard } from "../types";

import type { AxiosResponse } from "axios";

import type { WithApiKey, WithShard } from "../types/util";

interface FetchOptions extends WithApiKey, WithShard {
  /**
   * Endpoint to hit of the api
   */
  endpoint: string;
  /**
   * Additional headers to apply to the request
   */
  headers?: Record<string, string>;
  /**
   * Additional parameters to apply to the request
   */
  params?: any;
}

export async function fetch<T = never>({
  apiKey,
  endpoint,
  headers = {},
  params = {},
  shard = Shard.STEAM,
}: FetchOptions) {
  if (!Object.values(Shard).includes(shard))
    throw new Error(ErrorCode.INVALID_SHARD);

  const url = `${BASE_URL}/shards/${shard}/${endpoint}`;

  try {
    const { data }: AxiosResponse<T> = await axios(url, {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${apiKey}`,
        ...headers,
      },
      params,
      responseType: "json",
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
