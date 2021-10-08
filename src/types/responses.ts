import type { ResponseError } from ".";
import type { WithLinks } from "./util";

export enum ResponseObjectType {
  ASSET = "asset",
  MATCH = "match",
  PARTICIPANT = "participant",
  PLAYER = "player",
  ROSTER = "roster",
  SEASON = "season",
  TOURNAMENT = "tournament",
}

export interface Links {
  /**
   * @todo Unknown
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

export interface Assets {
  data: Array<Asset | {}>;
}

export interface BaseResponse extends WithLinks {
  /**
   * Unknown
   */
  meta: unknown;
}

export interface ErrorsResponse {
  errors: ResponseError;
}
