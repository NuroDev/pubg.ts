import {
  useMatch,
  usePlayer,
  usePlayerSeason,
  useSamples,
  useSeason,
  useSeasons,
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
   */
  public async getStatus() {}

  /**
   * Fetches telemetry data object
   *
   * @param {Object} options - Telemetry Options
   */
  public async getTelemetry({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: TelemetryOptions) {
    return await useTelemetry({
      apiKey,
      shard,
      ...rest,
    });
  }

  /**
   * Gets the tournament with the matching id
   *
   * @param {Object} options - Tournament Options
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
