import { ResponseObjectType, Shard } from ".";

import type { Match } from ".";
import type { WithLinks } from "./util";

interface PlayerAttributes {
  /**
   * @deprecated Date the attribute was first created
   */
  createdAt: Date;

  /**
   * PUBG in-game name
   */
  name: string;

  /**
   * Version of the game
   */
  patchVersion: string;

  /**
   * Platform shard
   */
  shardId: Shard;

  /**
   * Player statistics
   */
  stats: unknown | null;

  /**
   * Identifies the studio & game
   */
  titleId: unknown;

  /**
   * @deprecated Date the attribute was last updated or modified
   */
  updatedAt: Date;
}

export interface Player extends WithLinks {
  /**
   * Player specific attributes / metadata
   */
  attributes: PlayerAttributes;

  /**
   * Player ID
   */
  id: string;

  /**
   * References to resource objects related to this player
   */
  relationships: {
    assets: {
      data: Array<unknown>;
    };
    matches: {
      data: Array<Match>;
    };
  };

  /**
   * Identifier for this object type
   */
  type: ResponseObjectType.PLAYER;
}
