export enum ErrorCode {
  // =======================
  // General
  // =======================
  NO_API_KEY = "No API has been provided. An API key is required to use `pubg.ts`",
  INVALID_API_KEY = "An invalid API key has been provided. Please check the key is valid",

  // =======================
  // Invalid options
  // =======================
  INVALID_SHARD = "The shard argument provided is invalid. Please validate you have passed the correct shard value",

  // =======================
  // Hooks
  // =======================
  HOOK_FETCH_MATCH = "Failed to fetch data for useMatch hook",
  HOOK_FETCH_PLAYER = "Failed to fetch data for usePlayer hook",
  HOOK_FETCH_PLAYER_SEASON = "Failed to fetch data for usePlayerSeason hook",
  HOOK_FETCH_SAMPLES = "Failed to fetch data for useSampels hook",
  HOOK_FETCH_SEASON = "Failed to fetch data for useSeason hook",
  HOOK_FETCH_SEASONS = "Failed to fetch data for useSeasons hook",
  HOOK_FETCH_STATUS = "Failed to fetch the status of the API",
  HOOK_FETCH_TELEMETRY = "Failed to fetch data for useTelemetry hook",
  HOOK_FETCH_TOURNAMENT = "Failed to fetch data for useTournament hook",
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
