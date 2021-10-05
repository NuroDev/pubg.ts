import got from "got";

import { BASE_HEADERS, BASE_URL } from "./constants";

import type { Got } from "got";

import { ErrorCode, Shard } from "./types";

import type {
  ClientOptions,
  GetCurrentSeasonOptions,
  GetManyPlayerSeasonOptions,
  GetMatchOptions,
  GetPlayerOptions,
  GetPlayerSeasonsOptions,
  GetSamplesOptions,
  GetSeasonsOptions,
  GetTelemetryOptions,
  GetTournamentOptions,
} from "./types";

export class Client {
  /**
   * PUBG App API access token
   */
  private _apiKey: string;
  /**
   * Default shard to use if none provided in methods
   */
  private _shard: Shard;
  /**
   * Base PUBG API instance
   */
  private _fetch: Got;

  constructor({ apiKey, shard = Shard.STEAM }: ClientOptions) {
    this._apiKey = apiKey;
    this._shard = shard;

    this._fetch = got.extend({
      prefixUrl: BASE_URL,
      responseType: "json",
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${this._apiKey}`,
      },
    });

    if (!this._apiKey) throw new Error(ErrorCode.NO_API_KEY);

    if (this._apiKey.length <= 0) throw new Error(ErrorCode.INVALID_API_KEY);

    console.log(this._shard);
  }

  /**
   * Get a Season Object with the info of the current season
   *
   * @param _options {GetSeasonsOptions}
   */
  public async getCurrentSeason(_options: GetCurrentSeasonOptions) {}

  /**
   *
   * @param _options {GetManyPlayerSeasonOptions}
   */
  public async getManyPlayerSeason(_options: GetManyPlayerSeasonOptions) {}

  /**
   * Get a match from a match id
   *
   * @param _options {GetMatchOptions}
   */
  public async getMatch(_options: GetMatchOptions) {}

  /**
   * Get player by the given id or name
   *
   * @param _options {GetPlayerOptions}
   */
  public async getPlayer(_options: GetPlayerOptions) {}

  /**
   * Get a player season object
   *
   * When providing a Player Object for a player, the PlayerSeason will include the
   * full fetched player in relationships.player. Otherwise, it will just be a
   * reference to the player id and will need .fetch() for its info to be complete.
   *
   * @param _options {GetPlayerSeasonsOptions}
   */
  public async getPlayerSeason(_options: GetPlayerSeasonsOptions) {}

  /**
   * Gets a list of all past matches from the api
   *
   * @param _options {GetSamplesOptions}
   */
  public async getSamples(_options: GetSamplesOptions) {}

  /**
   * Get an array of all seasons of a provided shard
   *
   * @param _options {GetSeasonsOptions}
   */
  public async getSeasons(_options: GetSeasonsOptions) {}

  /**
   * Gets the status of the API
   */
  public async getStatus() {
    try {
      return await this._fetch("status");
    } catch (error) {
      throw new Error(`${ErrorCode.FETCH_STATUS}: ${error}`);
    }
  }

  /**
   * Fetches telemetry data object
   *
   * @param _options {GetTelemetryOptions}
   */
  public async getTelemetry(_options: GetTelemetryOptions) {}

  /**
   * Gets the tournament with the matching id
   *
   * @param _options {GetTournamentOptions}
   */
  public async getTournament(_options: GetTournamentOptions) {}

  /**
   * Gets a list of all tournaments
   */
  public async getTournaments() {}
}
