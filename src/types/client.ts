import type { Shard } from ".";

export interface ClientOptions {
  apiKey: string;
  shard?: Shard;
}
