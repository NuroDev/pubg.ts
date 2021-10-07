import { Shard } from ".";

import type { Links, Match } from ".";

enum PlayerType {
  PLAYER = "player",
}

interface PlayerAttributes {
  /**
   * @deprecated N/A
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
   * @deprecated N/A
   */
  updatedAt: Date;
}

export interface Player {
  /**
   * Player specific attributes / metadata
   */
  attributes: PlayerAttributes;
  /**
   * Player ID
   */
  id: string;
  /**
   * Links to relevant / current objects
   */
  links: Links;
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
  type: PlayerType;
}
