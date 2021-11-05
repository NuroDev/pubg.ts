import type { PubgResponseError } from ".";
import type { WithLinks } from "./util";

export enum ResponseObjectType {
  ASSET = "asset",
  MATCH = "match",
  PARTICIPANT = "participant",
  PLAYER = "player",
  PLAYER_SEASON = "playerSeason",
  RANKED_PLAYER_SEASON = "rankedplayerstats",
  ROSTER = "roster",
  SEASON = "season",
  STATUS = "status",
  TOURNAMENT = "tournament",
}

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

export interface Asset {
  /**
   * Asset specific attributes / metadata
   */
  attributes?: {
    /**
     * Time of telemetry creation
     */
    createdAt: Date;
    /**
     * Telemetry
     */
    name: string;
    /**
     * Link to the telemetry.json file
     */
    url: string;
  };

  /**
   * A randomly generated ID assigned to this resource object for linking elsewhere in the match response
   */
  id: string;

  /**
   * Identifier for this object type
   */
  type: ResponseObjectType.ASSET;
}

export interface ApiAssets {
  data: Array<Asset>;
}

export type Assets = Array<Asset>;

export interface BaseResponse extends WithLinks {
  /**
   * Unknown
   */
  meta: unknown;
}

export interface ErrorsResponse {
  errors: PubgResponseError;
}
