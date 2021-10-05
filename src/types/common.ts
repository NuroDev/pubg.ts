import type { Shard } from "./index";

export type WithShard<T = {}> = T & {
  /**
   * The server shard to send the request to
   */
  shard?: Shard;
};
