import { ErrorCode, Shard } from "..";
import { fetch } from "../util";

import type {} from "..";
import type { WithApiShard } from "../types/util";

export interface SamplesOptions extends WithApiShard {
  /**
   * The starting search date for the matches in UTC
   *
   * @default now() - 24hrs
   */
  createdAt?: Date;
}

export interface SamplesResponse {
  /**
   * @see https://documentation.pubg.com/en/samples-endpoint.html
   */
  data: {
    /**
     * Time of samples list creation
     */
    createdAt: Date;

    /**
     * Platform shard
     */
    shardId: Shard;

    /**
     * Identifies the studio & game
     */
    titleId: string;
  };
  relationships: {
    matches: {
      /**
       * An array of sample matches containing their IDs & shards
       */
      data: Array<{
        /**
         * Match ID
         *
         * Used to lookup the full match object on the /matches endpoint
         */
        id: string;
        /**
         * Identifier for this object type
         */
        type: string;
      }>;
    };
  };
}

/**
 * Get a list of all past matches from the api
 *
 * @todo Test this functions correctly
 *
 * @param {Object} options - Sample Options
 */
export async function useSamples({ createdAt, ...rest }: SamplesOptions) {
  try {
    return await fetch<SamplesResponse>({
      ...rest,
      endpoint: "samples",
      params: createdAt
        ? {
            "filter[createdAt]": createdAt.toISOString(),
          }
        : undefined,
    });
  } catch (error) {
    console.error(ErrorCode.HOOK_FETCH_SAMPLES, error);
    throw error;
  }
}
