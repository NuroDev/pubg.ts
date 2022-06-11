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
