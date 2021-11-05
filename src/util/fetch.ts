import axios from "axios";

import { BASE_HEADERS, BASE_URL } from "../constants";
import { ErrorCode, PubgResponseError, ResponseError, Shard } from "../types";

import type { AxiosResponse } from "axios";
import type { WithApiShard } from "../types/util";

interface FetchOptions extends WithApiShard {
  /**
   * Endpoint to hit of the api
   */
  endpoint: string;

  /**
   * Error code to print if the request fails
   */
  errorCode?: ErrorCode;

  /**
   * Additional headers to apply to the request
   *
   * @default undefined
   */
  headers?: Record<string, string>;

  /**
   * Additional parameters to apply to the request
   *
   * @default undefined
   */
  params?: any;

  /**
   * Concatenate the endpoint to the root domain / base URL rather than on top of a shard
   *
   * @default false
   */
  root?: boolean;
}

export async function fetch<T = never>({
  apiKey,
  endpoint,
  errorCode,
  headers = {},
  params = {},
  root = false,
  shard = Shard.STEAM,
}: FetchOptions): Promise<T | ResponseError> {
  if (!Object.values(Shard).includes(shard))
    throw new Error(ErrorCode.INVALID_SHARD);

  const url = root
    ? `${BASE_URL}/${endpoint}`
    : `${BASE_URL}/shards/${shard}/${endpoint}`;

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
  } catch ({ response }) {
    const { data, status } = response as {
      data: {
        errors: Array<PubgResponseError>;
      };
      status: number;
    };

    const error = data.errors[0];

    console.error(`${errorCode} - ${error.title}: ${error.detail}`);
    return {
      error,
      status,
    };
  }
}
