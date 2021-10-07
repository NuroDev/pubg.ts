import { fetch } from "../util";

import { BaseResponse, ErrorCode } from "..";
import type { WithApiShard } from "../types/util";

export interface SamplesOptions extends WithApiShard {}

export interface SamplesResponse extends BaseResponse {}

/**
 * Get a list of all past matches from the api
 *
 * @todo
 *
 * @param {Object} options - Sample Options
 */
export async function useSamples({ ...rest }: SamplesOptions) {
  try {
    return await fetch<SamplesResponse>({
      ...rest,
      endpoint: "",
    });
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_SAMPLES, error);
    throw error;
  }
}
