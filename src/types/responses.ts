import type { Player, ResponseError } from ".";

export interface Links {
  /**
   * Unknown
   */
  schema?: string;
  /**
   * Link to the current object
   */
  self: string;
}

export interface PlayerResponse {
  /**
   * Data about a player & their recent matches (Up to 14 days old)
   */
  data: Array<Player>;
  /**
   * Link to the current object
   */
  links: Links;
  /**
   * Unknown
   */
  meta: unknown;
}

export interface ErrorsResponse {
  errors: ResponseError;
}
