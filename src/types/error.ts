export enum ErrorCode {
  NO_API_KEY = "No API has been provided. An API key is required to use `pubg.ts`",
  INVALID_API_KEY = "An invalid API key has been provided. Please check the key is valid",

  INVALID_SHARD = "The shard argument provided is invalid. Please validate you have passed the correct shard value",
  INVALID_PLAYER_FETCH_TYPE = "An invalid player fetch type was used. This is likely an internal issue & not your fault.",

  FETCH_PLAYER = "Failed to fetch player",
  FETCH_STATUS = "Failed to fetch API status",
}

export interface ResponseError {
  detail: string;
  title: string;
}
