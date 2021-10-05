import got from "got";

import { BASE_HEADERS, BASE_URL } from "./constants";

import { ErrorCode, Shard } from "./types";

import type {
  ClientOptions,
  FetchOptions,
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
  private _apiKey: string;
  private _shard: Shard;

  constructor({ apiKey, shard = Shard.STEAM }: ClientOptions) {
    this._apiKey = apiKey;
    this._shard = shard;

    if (!this._apiKey) throw new Error(ErrorCode.NO_API_KEY);

    if (this._apiKey.length <= 0) throw new Error(ErrorCode.INVALID_API_KEY);
  }

  /**
   * Performs a basic HTTP request to the PUBG API
   *
   * @param _options
   */
  private async fetch<T>({ endpoint, shard = this._shard }: FetchOptions) {
    if (!shard.includes(typeof Shard)) throw new Error(ErrorCode.INVALID_SHARD);

    const url = `${BASE_URL}/shards/${shard}/${endpoint}`;

    try {
      const response = await got<T>(url, {
        headers: {
          ...BASE_HEADERS,
          Authorization: `Bearer ${this._apiKey}`,
        },
        responseType: "json",
      });
      console.log("response", response);
    } catch (error) {
      throw error;
    }
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
  public async getStatus() {}

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
