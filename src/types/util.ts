import type { Links, Shard } from "./index";

export type WithApiShard<T = {}> = T & {
  /**
   * PUBG Developer App API access token
   */
  apiKey: string;
  /**
   * The server shard to send the request to
   */
  shard?: Shard;
};

export type WithLinks<T = {}> = T & {
  /**
   * Links to relevant / current objects
   */
  links: Links;
};
