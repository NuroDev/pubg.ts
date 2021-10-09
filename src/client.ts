import {
  useMatch,
  usePlayer,
  usePlayerSeason,
  useSamples,
  useSeason,
  useSeasons,
  useStatus,
  useTelemetry,
  useTournament,
  useTournaments,
} from ".";
import { ErrorCode, Shard } from "./types";

import type {
  MatchOptions,
  PlayerOptions,
  PlayerSeasonOptions,
  SamplesOptions,
  SeasonOptions,
  TelemetryOptions,
  TournamentOptions,
} from ".";
import type { WithApiShard } from "./types/util";

interface ClientOptions extends WithApiShard {}

type ClientFnOptions<T> = Omit<T, "apiKey" | "shard">;

export class Client {
  /**
   * PUBG Developer API access token
   */
  private _apiKey: string;
  /**
   * Default shard to use if none provided in methods
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
   * Get a match from a match id
   *
   * @param {Object} options - Match Options
   * @param {string} options.id - Match ID
   */
  public async getMatch({ id }: ClientFnOptions<MatchOptions>) {
    return await useMatch({
      apiKey: this._apiKey,
      id,
      shard: this._shard,
    });
  }

  /**
   * Get player by the given id or name
   *
   * @param {Object} options - Player Options
   * @param {boolean} [options.id] - Whether the provided value(s) are ID's, not player names
   * @param {string | Array} options.value - Player or array of players to fetch
   */
  public async getPlayer({ id, value }: ClientFnOptions<PlayerOptions>) {
    return await usePlayer({
      apiKey: this._apiKey,
      id,
      shard: this._shard,
      value,
    });
  }

  /**
   * Get data for a single season of a player(s) by a given id or name
   *
   * @param {Object} options - Player Season Options
   */
  public async getPlayerSeason(options: ClientFnOptions<PlayerSeasonOptions>) {
    return await usePlayerSeason({
      apiKey: this._apiKey,
      shard: this._shard,
      ...options,
    });
  }

  /**
   * Get a list of all past matches from the api
   *
   * @param {Object} options - Samples Options
   * @param {Date | undefined} [options.createdAt] - The starting search date for the matches in UTC
   */
  public async getSamples({ createdAt }: ClientFnOptions<SamplesOptions> = {}) {
    return await useSamples({
      apiKey: this._apiKey,
      createdAt,
      shard: this._shard,
    });
  }

  /**
   * Get data on a specified season. Whether current or a player(s)
   * By default will fetch the current season
   *
   * @param {Object} options - Season Options
   * @param {string | undefined} [options.id] - Season ID
   */
  public async getSeason({ id }: ClientFnOptions<SeasonOptions> = {}) {
    return await useSeason({
      apiKey: this._apiKey,
      id,
      shard: this._shard,
    });
  }

  /**
   * Get an array of all seasons
   */
  public async getSeasons() {
    return await useSeasons({
      apiKey: this._apiKey,
      shard: this._shard,
    });
  }

  /**
   * Gets the status of the API
   */
  public async getStatus() {
    return await useStatus({
      apiKey: this._apiKey,
    });
  }

  /**
   * Fetches telemetry data object
   *
   * @param {Object} options - Telemetry Options
   * @param {string} options.url - URL of the telemetry object
   */
  public async getTelemetry({ url }: ClientFnOptions<TelemetryOptions>) {
    return await useTelemetry({
      apiKey: this._apiKey,
      url,
    });
  }

  /**
   * Gets the tournament with the matching id
   *
   * @param {Object} options - Tournament Options
   * @param {string | undefined} [options.id] - Tournament ID
   */
  public async getTournament({ id }: ClientFnOptions<TournamentOptions> = {}) {
    if (id) return await useTournament({ apiKey: this._apiKey, id });

    return await useTournaments({
      apiKey: this._apiKey,
    });
  }
}
