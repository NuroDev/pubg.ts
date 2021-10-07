import { useMatch, usePlayer } from ".";
import { ErrorCode, Shard } from "./types";

import type {
  ClientOptions,
  GetCurrentSeasonOptions,
  GetManyPlayerSeasonOptions,
  GetPlayerSeasonsOptions,
  GetSamplesOptions,
  GetSeasonsOptions,
  GetTelemetryOptions,
  GetTournamentOptions,
} from "./types";
import type { MatchOptions, PlayerOptions } from ".";

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
   * Get a Season Object with the info of the current season
   *
   * @param {Object} options - Get Seasons Options
   */
  public async getCurrentSeason({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: GetCurrentSeasonOptions) {
    return {};
  }

  /**
   *
   * @param {Object} options - Get Player Season Options
   */
  public async getManyPlayerSeason({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: GetManyPlayerSeasonOptions) {
    return {};
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
   * Get a player season object
   *
   * When providing a Player Object for a player, the PlayerSeason will include the
   * full fetched player in relationships.player. Otherwise, it will just be a
   * reference to the player id and will need .fetch() for its info to be complete.
   *
   * @param {Object} options - Player Seasons Options
   */
  public async getPlayerSeason({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: GetPlayerSeasonsOptions) {
    return {};
  }

  /**
   * Gets a list of all past matches from the api
   *
   * @param {Object} options - Samples Options
   */
  public async getSamples({
    apiKey = this._apiKey,
    shard = this._shard,
    ...rest
  }: GetSamplesOptions) {
    return {};
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
  }: GetSeasonsOptions) {
    return {};
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
  }: GetTelemetryOptions) {
    return {};
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
  }: GetTournamentOptions) {
    return {};
  }

  /**
   * Gets a list of all tournaments
   */
  public async getTournaments() {}
}
