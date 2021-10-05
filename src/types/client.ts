import type { Shard } from ".";
import type { WithShard } from "./common";

export interface ClientOptions {
  apiKey: string;
  shard?: Shard;
}

export interface GetCurrentSeasonOptions extends WithShard {}

export interface GetManyPlayerSeasonOptions extends WithShard {}

export interface GetMatchOptions extends WithShard {
  /**
   * ID of the match to get
   */
  id: string;
}

export interface GetPlayerOptions extends WithShard {}

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
