export enum ErrorCode {
  // General
  NO_API_KEY = "No API has been provided. An API key is required to get `pubg.ts`",
  INVALID_API_KEY = "An invalid API key has been provided. Please check the key is valid",

  // Invalid options
  INVALID_SHARD = "The shard argument provided is invalid. Please validate you have passed the correct shard value",
}

export interface PubgResponseError {
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
  [Error in PlayerError]: PubgResponseError;
} = {
  [PlayerError.NOT_FOUND]: {
    detail: "No player(s) found matching the criteria",
    title: "Not found",
  },
};
