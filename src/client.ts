import { getMatch, getPlayer } from "~/modules";
import { ErrorCode, Shard } from "~/types";

import type { MatchOptions, PlayerOptions } from "~/modules";
import type { WithApiShard } from "~/util/types";

interface ClientOptions extends WithApiShard {}

type ClientFnOptions<T> = Omit<T, "apiKey" | "shard">;

export class Client {
  /**
   * PUBG Developer API access token
   *
   * @see https://documentation.pubg.com/en/api-keys.html#api-keys
   */
  private _apiKey: string;

  /**
   * Default shard to get if none provided in methods
   */
  private _shard: Shard;

  /**
   * PUBG API Wrapper client
   *
   * @param {Object} options - Client Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {string} options.shard - Platform Shard
   */
  constructor({ apiKey, shard = Shard.STEAM }: ClientOptions) {
    this._apiKey = apiKey;
    this._shard = shard;

    if (!this._apiKey) throw new Error(ErrorCode.NO_API_KEY);
    if (this._apiKey.length <= 0) throw new Error(ErrorCode.INVALID_API_KEY);
  }

  /**
   * @name `getMatch`
   *
   * @description Get a match from a match id
   *
   * @param {String} options.id - Match ID
   */
  public getMatch({ id }: ClientFnOptions<MatchOptions>) {
    return getMatch({
      apiKey: this._apiKey,
      id,
      shard: this._shard,
    });
  }

  /**
   * @name `getPlayer`
   *
   * @description Get player by the given id or name
   *
   * @param {Boolean} [options.id] - Whether the provided value(s) are ID's, not player names
   * @param {Array} options.value - Player or array of players to fetch
   */
  public getPlayer({ id, skipFailed, value }: ClientFnOptions<PlayerOptions>) {
    return getPlayer({
      apiKey: this._apiKey,
      id,
      shard: this._shard,
      skipFailed,
      value,
    });
  }
}
