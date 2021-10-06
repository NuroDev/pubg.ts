export interface Match {
  /**
   * The type of match that was played.
   * Identifier for this object type ("match")
   */
  type: string; // TODO: Add enum type
  /**
   * The ID of the match itself.
   * Used to lookup the full match object on the `/matches` endpoint
   */
  id: string;
}
