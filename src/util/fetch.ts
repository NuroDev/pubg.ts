import axios from "axios";

import { BASE_HEADERS, BASE_URL } from "../constants";
import { ErrorCode, PubgResponseError, Shard } from "../types";

import type { AxiosResponse } from "axios";
import type { PromiseResult, Result } from "..";
import type { FetchOptions } from "../types/util";

export async function fetch<T>({
  apiKey,
  endpoint,
  headers = {},
  params = {},
  root = false,
  shard = Shard.STEAM,
}: FetchOptions): PromiseResult<T> {
  if (!Object.values(Shard).includes(shard))
    throw new Error(ErrorCode.INVALID_SHARD);

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

export async function fetchAll<T>(
  options: Array<FetchOptions>
): Promise<Array<Result<T>>> {
  const responses = (await Promise.all(
    options.map((option) => fetch<T>(option))
  )) as Array<Result<T>>;

  responses.forEach((res) => {
    if (res.error) return res;

    return;
  });

  return responses;
}
