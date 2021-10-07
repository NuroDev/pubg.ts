import type { WithApiKey, WithShard } from "./util";

export interface ClientOptions extends WithApiKey, WithShard {}

export interface FetchOptions extends WithShard {
  /**
   *  Endpoint to hit of the api
   */
  endpoint: string;
  /**
   * Optional: Additional headers to apply to the request
   */
  headers?: Record<string, string>;
  /**
   * Optional: Additional parameters to apply to the request
   */
  params?: any;
}

export interface GetCurrentSeasonOptions extends WithShard {}

export interface GetManyPlayerSeasonOptions extends WithShard {}

export interface GetMatchOptions extends WithShard {
  /**
   * ID of the match to get
   */
  id: string;
}

export type GetPlayerOptions = WithShard &
  (
    | {
        /**
         * ID or array of player ID's to fetch
         */
        id: string | Array<string>;
        /**
         * Type of player provided
         */
        type: "id";
      }
    | {
        /**
         * Name or array of player names to fetch
         */
        name: string | Array<string>;
        /**
         * Type of player provided
         */
        type: "name";
      }
  );

export interface GetPlayerSeasonsOptions extends WithShard {}

export interface GetSamplesOptions extends WithShard {
  /**
   * The starting search date for the matches
   */
  createdAt: Date;
}

export interface GetSeasonsOptions extends WithShard {}

export interface GetTelemetryOptions {
  /**
   * URL of the telemetry object
   */
  url: string;
}

export interface GetTournamentOptions {
  /**
   * ID of the tournament
   */
  id: string;
}
