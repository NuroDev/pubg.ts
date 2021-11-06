import { fetch } from "../util";

import type {
  ApiSampleMatches,
  PromiseResult,
  Sample,
  SampleMatches,
} from "..";
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
  data: {
    /**
     * Sample specific attributes / metadata
     *
     * @see https://documentation.pubg.com/en/samples-endpoint.html
     */
    attributes: Sample;

    /**
     * ID of the sample
     */
    id: string;

    /**
     * References to resource objects related to this sample
     */
    relationships: {
      matches: ApiSampleMatches;
    };
  };
}

/**
 * @see https://documentation.pubg.com/en/samples-endpoint.html
 */
export type SamplesResponse = PromiseResult<
  Sample & {
    /**
     * ID of the sample
     */
    id: string;

    /**
     *
     */
    matches: SampleMatches;
  }
>;

/**
 * Get a list of all past matches from the api
 *
 * @param {Object} options - Sample Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {Date | undefined} options.createdAt - The starting search date for the matches in UTC
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function getSamples({
  apiKey,
  createdAt,
  shard,
}: SamplesOptions): SamplesResponse {
  const response = await fetch<ApiSamplesResponse>({
    apiKey,
    endpoint: "samples",
    params: createdAt
      ? {
          "filter[createdAt-start]": createdAt.toISOString(),
        }
      : undefined,
    shard,
  });

  if (response.error) return response;

  const { data } = response.data;

  return {
    data: {
      ...data.attributes,
      id: data.id,
      matches: data.relationships.matches.data,
    },
    error: null,
  };
}
