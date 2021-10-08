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
} from ".";
import { ErrorCode, Shard } from "./types";

import type {
  MatchOptions,
  PlayerOptions,
  PlayerSeasonOptions,
  SamplesOptions,
  SeasonOptions,
  SeasonsOptions,
  StatusOptions,
  TelemetryOptions,
  TournamentOptions,
} from ".";
import type { WithApiShard } from "./types/util";

interface ClientOptions extends WithApiShard {}

export class Client {
  /**
   * PUBG Developer API access token
   */
  private _apiKey: string;
  /**
   * Default shard to use if none provided in methods
   */
  private _shard: Shard;

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
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {string} options.id - Match ID
   * @param {string | undefined} [options.shard] - Platform Shard
   */
  public async getMatch({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: MatchOptions) {
    return await useMatch({
      apiKey,
      shard,
      ...rest,
    });
  }

  /**
   * Get player by the given id or name
   *
   * @param {Object} options - Player Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {boolean} options.id - Whether the provided value(s) are ID's, not player names
   * @param {string | undefined} [options.shard] - Platform Shard
   * @param {string | Array} - Player or array of players to fetch
   */
  public async getPlayer({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: PlayerOptions) {
    return await usePlayer({
      apiKey,
      shard,
      ...rest,
    });
  }

  /**
   * Get data for a single season of a player(s) by a given id or name
   *
   * @param {Object} options - Player Season Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {string | undefined} [options.shard] - Platform Shard
   */
  public async getPlayerSeason({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: PlayerSeasonOptions) {
    return await usePlayerSeason({
      apiKey,
      shard,
      ...rest,
    });
  }

  /**
   * Get a list of all past matches from the api
   *
   * @param {Object} options - Samples Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {Date | undefined} options.createdAt - The starting search date for the matches in UTC
   * @param {string | undefined} [options.shard] - Platform Shard
   */
  public async getSamples({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: SamplesOptions) {
    return await useSamples({
      apiKey,
      shard,
      ...rest,
    });
  }

  /**
   * Get data on a specified season. Whether current or a player(s)
   * By default will fetch the current season
   *
   * @param {Object} options - Season Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {string | undefined} [options.id] - Season ID
   * @param {string | undefined} [options.shard] - Platform Shard
   */
  public async getSeason({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: SeasonOptions) {
    return await useSeason({
      apiKey,
      shard,
      ...rest,
    });
  }

  /**
   * Get an array of all seasons of a provided shard
   *
   * @param {Object} options - Seasons Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {string | undefined} [options.shard] - Platform Shard
   */
  public async getSeasons({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: SeasonsOptions) {
    return await useSeasons({
      apiKey,
      shard,
      ...rest,
    });
  }

  /**
   * Gets the status of the API
   *
   * @param {Object} options - Status Options
   * @param {string} options.apiKey - PUBG Developer API key
   */
  public async getStatus({ apiKey = this._apiKey }: StatusOptions) {
    return await useStatus({ apiKey });
  }

  /**
   * Fetches telemetry data object
   *
   * @param {Object} options - Telemetry Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {string | undefined} [options.shard] - Platform Shard
   * @param {string} options.url - URL of the telemetry object
   */
  public async getTelemetry({
    apiKey = this._apiKey,
    ...rest
  }: TelemetryOptions) {
    return await useTelemetry({
      apiKey,
      ...rest,
    });
  }

  /**
   * Gets the tournament with the matching id
   *
   * @param {Object} options - Tournament Options
   * @param {string} options.apiKey - PUBG Developer API key
   * @param {string | undefined} [options.shard] - Platform Shard
   * @param {string | undefined} [options.id] - Tournament ID
   */
  public async getTournament({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: TournamentOptions) {
    return await useTournament({
      apiKey,
      shard,
      ...rest,
    });
  }
}
