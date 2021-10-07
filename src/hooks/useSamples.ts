import { fetch } from "../util";

import type { BaseResponse } from "..";
import type { WithApiShard } from "../types/util";

export interface SamplesOptions extends WithApiShard {}

interface SamplesResponse extends BaseResponse {}

/**
 * Get a list of all past matches from the api
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
    console.error(error);
    throw error;
  }
}
