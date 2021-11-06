import type { Links, Shard } from "./index";

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
