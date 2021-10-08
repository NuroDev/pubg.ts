import { ErrorCode } from "..";
import { fetch } from "../util";

import type { Sample, SampleMatches } from "..";
import type { WithApiShard } from "../types/util";

export interface SamplesOptions extends WithApiShard {
  /**
   * The starting search date for the matches in UTC
   *
   * @default now() - 24hrs
   */
  createdAt?: Date;
}

interface ApiSamplesResponse {
  /**
   * @see https://documentation.pubg.com/en/samples-endpoint.html
   */
  data: Sample;

  relationships: {
    matches: SampleMatches;
  };
}

/**
 * @see https://documentation.pubg.com/en/samples-endpoint.html
 */
export type SamplesResponse = Promise<
  Sample & {
    matches: SampleMatches;
  }
>;

/**
 * Get a list of all past matches from the api
 *
 * @todo Test this functions correctly
 *
 * @param {Object} options - Sample Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {Date | undefined} options.createdAt - The starting search date for the matches in UTC
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function useSamples({
  createdAt,
  ...rest
}: SamplesOptions): SamplesResponse {
  try {
    const { data, relationships } = await fetch<ApiSamplesResponse>({
      ...rest,
      endpoint: "samples",
      params: createdAt
        ? {
            "filter[createdAt]": createdAt.toISOString(),
          }
        : undefined,
    });

    return {
      ...data,
      matches: relationships.matches,
    };
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_SAMPLES, error);
    throw error;
  }
}
