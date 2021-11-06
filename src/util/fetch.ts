import axios from "axios";

import { BASE_HEADERS, BASE_URL } from "../constants";
import { ErrorCode, PubgResponseError, PromiseResult, Shard } from "../types";

import type { AxiosResponse } from "axios";
import type { Result } from "..";
import type { WithApiShard } from "../types/util";

export interface FetchOptions extends WithApiShard {
  /**
   * Endpoint to hit of the api
   */
  endpoint: string;

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

async function fetchSingle<T = never>({
  apiKey,
  endpoint,
  headers = {},
  params = {},
  root = false,
  shard = Shard.STEAM,
}: FetchOptions): PromiseResult<T> {
  if (!Object.values(Shard).includes(shard))
    throw new Error(ErrorCode.INVALID_SHARD);

  // TODO: Cleanup
  const url = root
    ? `${BASE_URL}/${endpoint}`
    : `${BASE_URL}/shards/${shard}/${endpoint}`;

  try {
    const response: AxiosResponse<T> = await axios(url, {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${apiKey}`,
        ...headers,
      },
      params,
      responseType: "json",
    });

    return {
      data: response.data,
      error: null,
    };
  } catch ({ response }) {
    const { data, status } = response as {
      data: {
        errors: Array<PubgResponseError>;
      };
      status: number;
    };

    const error = data.errors[0];

    console.error(`${error.title}: ${error.detail}`);

    return {
      data: null,
      error,
      status,
    };
  }
}

export async function fetch<T, U = Result<T>>(
  options: FetchOptions | Array<FetchOptions>
): Promise<U> {
  if (!Array.isArray(options)) return await fetchSingle<T>(options);

  const responses = await Promise.all(
    options.map((option) => fetchSingle<T>(option))
  );
  console.log("responses", responses);

  responses.forEach((res) => {
    if (res.error) return res;

    return;
  });

  return responses;
}
