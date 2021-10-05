import { Shard } from "./types";

import type { ClientOptions } from "./types";

export class Client {
  private _apiKey: string | null = null;
  private _shard: Shard | null = Shard.STEAM;

  constructor({ apiKey, shard = Shard.STEAM }: ClientOptions) {
    this._apiKey = apiKey;
    this._shard = shard;

    console.log("apiKey", this._apiKey);
    console.log("shard", this._shard);
  }
}
