import type { Shard } from "~/types";
import type { Links } from "~/util/types";

export type WithApiKey<T = {}> = T & {
  /**
   * PUBG Developer App API access token
   */
  apiKey: string;
};

export type WithShard<T = {}> = T & {
  /**
   * The server shard to send the request to
   */
  shard?: Shard;
};

export type WithApiShard<T = {}> = T & WithApiKey & WithShard;

export type WithLinks<T = {}> = T & {
  /**
   * Links to relevant / current objects
   */
  links: Links;
};
