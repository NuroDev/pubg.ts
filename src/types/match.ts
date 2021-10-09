import type {
  Assets,
  DeathType,
  Gamemode,
  Map,
  MatchType,
  ResponseObjectType,
  SeasonState,
  Shard,
} from ".";
import type { WithLinks } from "./util";

interface MatchAttributes {
  /**
   * Time this match object was stored in the API
   */
  createdAt: Date;

  /**
   * Length of the match measured in seconds
   */
  duration: number;

  /**
   * Gamemode played
   */
  gameMode: Gamemode;

  /**
   * If this match is a custom match
   */
  isCustomMatch: boolean;

  /**
   * Name of the map
   */
  mapName: Map;

  /**
   * Type of match
   */
  matchType: MatchType;

  /**
   * The state of the season
   */
  seasonState: SeasonState;

  /**
   * Platform shard
   */
  shardId: Shard;

  /**
   * Unknown
   */
  stats: unknown | null;

  /**
   * Unknown
   */
  tags: unknown | null;

  /**
   * Identifies the studio & game
   */
  titleId: string;
}

/**
 * Data to track the scores of each opposing group of participants
 * Rosters can have one or many participants depending on the game mode
 * These are only meaningful within the context of a match and are not exposed as a standalone resource
 */
export interface Roster {
  /**
   * Roster specific attributes / metadata
   */
  attributes?: {
    /**
     * Platform shard
     */
    shardId: Shard;
    stats: {
      /**
       * This roster's placement in the match
       *
       * Min: 1
       * Max: 130
       */
      rank: number;
      /**
       * An arbitrary ID assigned to this roster
       */
      teamId: number;
    };
    /**
     * Indicates if this roster won the match
     */
    won: string;
  };

  /**
   * A randomly generated ID assigned to this resource object for linking elsewhere in the match response
   */
  id: string;

  relationships?: {
    /**
     * An array of references to participant objects that can be found in the included array
     */
    participants: {
      data: Array<{
        /**
         * Participant ID - Use to find full participant object in the included array
         */
        id: string;
        /**
         * Identifier for this object type ("participant")
         */
        type: string;
      }>;
    };
    team: unknown;
  };

  /**
   * Identifier for this object type
   */
  type: ResponseObjectType.ROSTER;
}

/**
 * A participant represents a player in the context of a match
 * These are only meaningful within the context of a match and are not exposed as a standalone resource
 */
export interface Participant {
  /**
   * Participant specific attributes / metadata
   */
  attributes?: {
    /**
     * N/A
     */
    actor: string;
    /**
     * Platform Shard
     */
    shardId: Shard;
    /**
     * Player stats in the context of a match
     */
    stats: {
      /**
       * Number of players knocked
       *
       * Min: 0
       */
      DBNOs: number;
      /**
       * Number of enemy players this player damaged that were killed by teammates
       *
       * Min: 0
       * Max: 128
       */
      assists: number;
      /**
       * Number of boost items used
       *
       * Min: 0
       */
      boosts: number;
      /**
       * Total damage dealt. Note: Self inflicted damage is subtracted
       *
       * Min: 0
       */
      damageDealt: number;
      /**
       * The way by which this player died, or alive if they didn't
       */
      deathType: DeathType;
      /**
       * Number of enemy players killed with headshots
       *
       * Min: 0
       * Max: 129
       */
      headshotKills: number;
      /**
       * Number of healing items used
       *
       * Min: 0
       */
      heals: number;
      /**
       * This player's rank in the match based on kills
       *
       * Min: 1
       * Max: 130
       */
      killPlace: number;
      /**
       * Total number of kill streaks
       *
       * Min: 0
       */
      killStreaks: number;
      /**
       * Number of enemy players killed
       *
       * Min: 0,
       * Max: 129
       */
      kills: number;
      /**
       * Unknown
       *
       * Min: 0
       */
      longestKill: number;
      /**
       * PUBG IGN of the player associated with this participant
       */
      name: string;
      /**
       * Account ID of the player associated with this participant
       */
      playerId: string;
      /**
       * Number of times this player revived teammates
       *
       * Min: 0
       */
      revives: number;
      /**
       * Total distance traveled in vehicles measured in meters
       *
       * Min: 0
       */
      rideDistance: number;
      /**
       * Number of kills while in a vehicle
       *
       * Min: 0
       */
      roadKills: number;
      /**
       * Total distance traveled while swimming measured in meters
       *
       * Min: 0
       */
      swimDistance: number;
      /**
       * Number of times this player killed a teammate
       *
       * Min: 0
       */
      teamKills: number;
      /**
       * Amount of time survived measured in seconds
       *
       * Min: 0
       */
      timeSurvived: number;
      /**
       * Number of vehicles destroyed
       *
       * Min: 0
       */
      vehicleDestroys: number;
      /**
       * Total distance traveled on foot measured in meters
       *
       * Min: 0
       */
      walkDistance: number;
      /**
       * Number of weapons picked up
       *
       * Min: 0
       */
      weaponsAcquired: number;
      /**
       * This player's placement in the match
       *
       * Min: 1,
       * Max: 130
       */
      winPlace: number;
    };
  };

  /**
   * A randomly generated ID assigned to this resource object for linking elsewhere in the match response
   */
  id: string;

  /**
   * Identifier for this object type
   */
  type: ResponseObjectType.PARTICIPANT;
}

/**
 * Data about a complete match
 *
 * This includes data such as the gamemode played, duration, participated players, etc
 *
 * @see https://documentation.pubg.com/en/matches-endpoint.html
 */
export interface Match extends WithLinks {
  /**
   * Match specific attributes / metadata
   */
  attributes: MatchAttributes;

  /**
   * The ID of the match itself
   */
  id: string;

  /**
   * References to resource objects related to this match
   */
  relationships: {
    assets: Assets;
    rosters: {
      data: Array<Roster>;
    };
    rounds: unknown;
    spectators: unknown;
  };

  /**
   * Identifier for this object type
   */
  type: ResponseObjectType.MATCH;
}

export interface Tournament {
  /**
   * Tournament specific attributes / metadata
   */
  attributes: {
    /**
     * Time the match object was stored in the API
     */
    createdAt: Date;
  };

  /**
   * The ID of the tournament itself
   */
  id: string;

  /**
   * References to resource objects related to this tournament
   */
  relationships: {
    matches: {
      data: Array<{
        /**
         * Match ID
         *
         * Used to lookup the full match object on the /matches endpoint
         */
        id: string;
        /**
         * Identifier for this object type
         */
        type: string;
      }>;
    };
  };

  /**
   * Identifier for this object type
   */
  type: ResponseObjectType.TOURNAMENT;
}

export interface Sample {
  /**
   * Time of samples list creation
   */
  createdAt: Date;

  /**
   * Platform shard
   */
  shardId: Shard;

  /**
   * Identifies the studio & game
   */
  titleId: string;
}

/**
 * An array of sample matches containing their IDs & shards
 */
export type SampleMatches = Array<{
  /**
   * Match ID
   *
   * Used to lookup the full match object on the /matches endpoint
   */
  id: string;
  /**
   * Identifier for this object type
   */
  type: string;
}>;

export interface ApiSampleMatches {
  /**
   * An array of sample matches containing their IDs & shards
   */
  data: SampleMatches;
}
