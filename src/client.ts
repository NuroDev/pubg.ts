import axios from "axios";

import { BASE_HEADERS, BASE_URL } from "./constants";
import { ErrorCode, Shard } from "./types";

import type { AxiosResponse } from "axios";

import type {
  ClientOptions,
  FetchOptions,
  GetCurrentSeasonOptions,
  GetManyPlayerSeasonOptions,
  GetMatchOptions,
  GetPlayerOptions,
  PlayerResponse,
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

  constructor({ apiKey, shard = Shard.STEAM }: ClientOptions) {
    this._apiKey = apiKey;
    this._shard = shard;

    if (!this._apiKey) throw new Error(ErrorCode.NO_API_KEY);

    if (this._apiKey.length <= 0) throw new Error(ErrorCode.INVALID_API_KEY);
  }

  /**
   * Performs a basic HTTP request to the PUBG API
   *
   * @param {FetchOptions} options - Fetch options
   */
  private async _fetch<T = never>({
    endpoint,
    headers,
    params,
    shard = this._shard,
  }: FetchOptions) {
    if (!Object.values(Shard).includes(shard))
      throw new Error(ErrorCode.INVALID_SHARD);

    const url = `${BASE_URL}/shards/${shard}/${endpoint}`;

    try {
      const { data }: AxiosResponse<T> = await axios(url, {
        headers: {
          ...BASE_HEADERS,
          Authorization: `Bearer ${this._apiKey}`,
          ...headers,
        },
        params,
        responseType: "json",
      });

      return data;
    } catch (error) {
      console.error(error);
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
   * @param {Object} options - Player Options
   */
  public async getPlayer({ shard = this._shard, ...rest }: GetPlayerOptions) {
    switch (rest.type) {
      case "id":
        const isIdArray = Array.isArray(rest.id);
        const playerIds = rest.id as Array<string>;

        return await this._fetch<PlayerResponse>({
          endpoint: isIdArray ? "players" : `players/${rest.id}`,
          params: isIdArray
            ? { "filter[playerIds]": playerIds.join(",") }
            : undefined,
        });
      case "name":
        const isNameArray = Array.isArray(rest.name);
        const playerNames = rest.name as Array<string>;

        return await this._fetch<PlayerResponse>({
          endpoint: "players",
          params: {
            "filter[playerNames]": isNameArray
              ? playerNames.join(",")
              : rest.name,
          },
        });
      default:
        throw new Error(ErrorCode.INVALID_PLAYER_FETCH_TYPE);
    }
  }

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
