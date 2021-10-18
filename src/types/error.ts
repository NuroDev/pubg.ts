export enum ErrorCode {
  // =======================
  // General
  // =======================
  NO_API_KEY = "No API has been provided. An API key is required to get `pubg.ts`",
  INVALID_API_KEY = "An invalid API key has been provided. Please check the key is valid",

  // =======================
  // Invalid options
  // =======================
  INVALID_SHARD = "The shard argument provided is invalid. Please validate you have passed the correct shard value",

  // =======================
  // Hooks
  // =======================
  HOOK_FETCH_MATCH = "Failed to fetch data for getMatch hook",
  HOOK_FETCH_PLAYER = "Failed to fetch data for getPlayer hook",
  HOOK_FETCH_PLAYER_SEASON = "Failed to fetch data for getPlayerSeason hook",
  HOOK_FETCH_SAMPLES = "Failed to fetch data for getSampels hook",
  HOOK_FETCH_SEASON = "Failed to fetch data for getSeason hook",
  HOOK_FETCH_SEASONS = "Failed to fetch data for getSeasons hook",
  HOOK_FETCH_STATUS = "Failed to fetch the status of the API",
  HOOK_FETCH_TELEMETRY = "Failed to fetch data for getTelemetry hook",
  HOOK_FETCH_TOURNAMENT = "Failed to fetch data for getTournament hook",
}

export interface ResponseError {
  detail: string;
  title: string;
}

enum PlayerError {
  /**
   * Not Found
   *
   * No player(s) found matching the criteria
   */
  NOT_FOUND = "not-found",
}

export const PlayerErrors: {
  [Error in PlayerError]: ResponseError;
} = {
  [PlayerError.NOT_FOUND]: {
    detail: "No player(s) found matching the criteria",
    title: "Not found",
  },
};
