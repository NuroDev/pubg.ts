import type { ApiMatch } from "~/modules/match/match.types";
import type { Shard } from "~/types";
import type { ResponseObjectType, WithLinks } from "~/util/types";

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

export interface ApiPlayer extends WithLinks {
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
      data: Array<ApiMatch>;
    };
  };

  /**
   * Identifier for this object type
   */
  type: ResponseObjectType.PLAYER;
}

export interface Player
  extends Pick<ApiPlayer, "id" | "type">,
    PlayerAttributes {
  /**
   * Unknown
   */
  assets: Array<unknown>;

  /**
   * An array of API matches
   */
  matches: Array<ApiMatch>;
}
