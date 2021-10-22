import type { ResponseObjectType } from ".";

/**
 * Season
 *
 * @see https://documentation.pubg.com/en/seasons-endpoint.html
 */
export interface ApiSeason {
  /**
   * Season specific attributes / metadata
   */
  attributes: {
    /**
     * Indicates if the season is active
     */
    isCurrentSeason: boolean;

    /**
     * Indicates if the season is not active
     */
    isOffseason: boolean;
  };

  /**
   * Season ID
   *
   * getd to lookup a player's stats for this season on the /players endpoint
   */
  id: string;

  /**
   * Identifier for this object type ("season")
   */
  type: ResponseObjectType.SEASON;
}

export interface Season extends Pick<ApiSeason, "id" | "type"> {
  /**
   * Indicates if the season is active
   */
  isCurrentSeason: boolean;

  /**
   * Indicates if the season is not active
   */
  isOffseason: boolean;
}

/**
 * Season State
 *
 * What state the season is currently in
 *
 * @see https://documentation.pubg.com/en/seasons-endpoint.html
 */
export enum SeasonState {
  /**
   * @todo Unknown
   */
  CLOSED = "closed",

  /**
   * @todo Unknown
   */
  PREPARE = "prepare",

  /**
   * @todo Unknown
   */
  PROGRESS = "progress",
}

export type ApiPlayerSeason =
  | {
      /**
       * Season specific attributes / metadata
       */
      attributes: {
        /**
         * @deprecated
         * Highest number of rank points the player was awarded during the season across all game modes
         * Min: 0
         */
        bestRankPoint?: number;

        /**
         * Game Mode stats objects contain a player's aggregated stats for a game mode in the context of a season.
         */
        gameModeStats: {
          [G in GameModeStatGamemode]: GameModeStat;
        };
      };

      /**
       * Lists of up to the 32 most recent match IDs that this player played this season (within the last 14 days) separated by game mode.
       * If a player didn't play any matches in a season with a specific game mode (or within the last 14 days), then the array for that game mode will be empty.
       */
      relationships: {
        matchesDuo: MatchGameModeResponse;
        matchesDuoFPP: MatchGameModeResponse;
        matchesSolo: MatchGameModeResponse;
        matchesSoloFPP: MatchGameModeResponse;
        matchesSquad: MatchGameModeResponse;
        matchesSquadFPP: MatchGameModeResponse;
        player: {
          data: {
            /**
             * Player ID
             */
            id: string;

            /**
             * Identifier for this object type ("player")
             */
            type: ResponseObjectType.PLAYER;
          };
        };
        season: {
          data: {
            /**
             * Season ID
             */
            id: string;

            /**
             * Identifier for this object type ("season")
             */
            type: ResponseObjectType.SEASON;
          };
        };
      };

      /**
       * Identifier for this object type ("playerSeason")
       */
      type: ResponseObjectType.PLAYER_SEASON;
    }
  | {
      /**
       * Season specific attributes / metadata
       */
      attributes: {
        /**
         * Ranked Game Mode stats objects contain a player's aggregated ranked stats for a game mode in the context of a season.
         */
        rankedGameModeStats: {
          [GameModeStatGamemode.SQUAD]: RankedGameModeStats;
          [GameModeStatGamemode.SQUAD_FPP]: RankedGameModeStats;
        };
      };

      /**
       * References to resource objects related to this match
       */
      relationships: {
        player: {
          data: {
            /**
             * Player ID
             */
            id: string;

            /**
             * Identifier for this object type ("player")
             */
            type: ResponseObjectType.PLAYER;
          };
        };
        season: {
          data: {
            /**
             * Season ID
             */
            id: string;

            /**
             * Identifier for this object type ("season")
             */
            type: ResponseObjectType.SEASON;
          };
        };
      };

      /**
       * Identifier for this object type ("rankedplayerstats")
       */
      type: ResponseObjectType.RANKED_PLAYER_SEASON;
    };

export type PlayerSeason =
  | {
      /**
       * @deprecated
       * Highest number of rank points the player was awarded during the season across all game modes
       * Min: 0
       */
      bestRankPoint?: number;

      /**
       * Stats for the player broken down by gamemode
       */
      gamemodeStats: {
        [G in GameModeStatGamemode]: GameModeStat;
      };

      /**
       * Matches ID's for each gamemode
       */
      matches: {
        [G in GameModeStatGamemode]: Array<string>;
      };

      /**
       * Player ID
       */
      playerId: string;

      /**
       * Season ID
       */
      seasonId: string;

      /**
       * Identifier for this object type ("playerSeason")
       */
      type: ResponseObjectType.PLAYER_SEASON;
    }
  | {
      /**
       * Stats for the player broken down by gamemode
       */
      rankedGameModeStats: {
        [GameModeStatGamemode.SQUAD]: RankedGameModeStats;
        [GameModeStatGamemode.SQUAD_FPP]: RankedGameModeStats;
      };

      /**
       * Player ID
       */
      playerId: string;

      /**
       * Season ID
       */
      seasonId: string;

      /**
       * Identifier for this object type ("rankedplayerstats")
       */
      type: ResponseObjectType.RANKED_PLAYER_SEASON;
    };

/**
 * All gamodes that support player season statistics
 */
export enum GameModeStatGamemode {
  /**
   * Duo's (Third Person Perspective)
   */
  DUO = "duo",

  /**
   * Duo's (First Person Perspective)
   */
  DUO_FPP = "duo-fpp",

  /**
   * Solo's (Third Person Perspective)
   */
  SOLO = "solo",

  /**
   * Solo's (First Person Perspective)
   */
  SOLO_FPP = "solo-fpp",

  /**
   * Squad (Third Person Perspective)
   */
  SQUAD = "squad",

  /**
   * Squad (First Person Perspective)
   */
  SQUAD_FPP = "squad-fpp",
}

/**
 * All player stats for a given gamemode
 */
interface GameModeStat {
  /**
   * Assists
   *
   * Min: 0
   */
  assists: number;

  /**
   * Boosts
   *
   * Min: 0
   */
  boosts: number;

  /**
   * Daily Kills
   *
   * Min: 0
   */
  dailyKills: number;

  /**
   * Daily Wins
   *
   * Min: 0
   */
  dailyWins: number;

  /**
   * Damage Dealt
   *
   * Min: 0
   */
  damageDealt: number;

  /**
   * Days
   *
   * Min: 0
   */
  days: number;

  /**
   * Down but not out's
   *
   * Min: 0
   */
  dBNOs: number;

  /**
   * Headshot Kills
   *
   * Min: 0
   */
  headshotKills: number;

  /**
   * Heals
   *
   * Min: 0
   */
  heals: number;

  /**
   * @deprecated Kill Points
   */
  killPoints: number;

  /**
   * Kills
   *
   * Min: 0
   */
  kills: number;

  /**
   * Longest Kill
   *
   * Min: 0
   */
  longestKill: number;

  /**
   * Longest Time Survived
   *
   * Min: 0
   */
  longestTimeSurvived: number;

  /**
   * Losses
   *
   * Min: 0
   */
  losses: number;

  /**
   * Max Kill Streaks
   *
   * Min: 0
   */
  maxKillStreaks: number;

  /**
   * Most Survival Time
   *
   * Min: 0
   */
  mostSurvivalTime: number;

  /**
   * @deprecated Rank Points
   *
   * Min: 0
   */
  rankPoints: number;

  /**
   * @deprecated Rank Points Title
   */
  rankPointsTitle: string;

  /**
   * Revives
   *
   * Min: 0
   */
  revives: number;

  /**
   * Ride Distance
   *
   * Min: 0
   */
  rideDistance: number;

  /**
   * Road Kills
   *
   * Min: 0
   */
  roadKills: number;

  /**
   * Round Most Kills
   *
   * Min: 0
   */
  roundMostKills: number;

  /**
   * Rounds Played
   *
   * Min: 0
   */
  roundsPlayed: number;

  /**
   * Suicides
   *
   * Min: 0
   */
  suicides: number;

  /**
   * Swim Distance
   *
   * Min: 0
   */
  swimDistance: number;

  /**
   * Team Kills
   *
   * Min: 0
   */
  teamKills: number;

  /**
   * Time Survived
   *
   * Min: 0
   */
  timeSurvived: number;

  /**
   * Top 10's
   *
   * Min: 0
   */
  top10s: number;

  /**
   * Vehicle Destroys
   *
   * Min: 0
   */
  vehicleDestroys: number;

  /**
   * Walk Distance
   *
   * Min: 0
   */
  walkDistance: number;

  /**
   * Weapons Acquired
   *
   * Min: 0
   */
  weaponsAcquired: 12;

  /**
   * Weekly Kills
   *
   * Min: 0
   */
  weeklyKills: number;

  /**
   * Weekly Wins
   *
   * Min: 0
   */
  weeklyWins: number;

  /**
   * @deprecated Win Points
   */
  winPoints: number;

  /**
   * Wins
   *
   * Min: 0
   */
  wins: number;
}

interface RankedGameModeStats {
  /**
   * Assists
   *
   * Min: 0
   */
  assists: number;

  /**
   * Average Rank
   *
   * Min: 0
   */
  avgRank: number;

  /**
   * @deprecated Average Survival Time
   *
   * Min: 0
   */
  avgSurvivalTime: number;

  /**
   * Best Rank Point
   *
   * Min: 0
   */
  bestRankPoint: number;

  /**
   * Best Tier
   */
  bestTier: {
    /**
     * Highest ranked tier
     */
    tier: string;

    /**
     * Highest ranked sub-tier
     */
    subTier: string;
  };

  /**
   * @deprecated Boosts
   *
   * Min: 0
   */
  boosts: number;

  /**
   * Current Rank Point
   *
   * Min: 0
   */
  currentRankPoint: number;

  /**
   * Current Tier
   */
  currentTier: {
    /**
     * Current rank tier
     */
    tier: string;

    /**
     * Current rank sub-tier
     */
    subTier: string;
  };

  /**
   * Down but not out's
   *
   * Min: 0
   */
  dBNOs: number;

  /**
   * Damage Dealt
   *
   * Min: 0
   */
  damageDealt: number;

  /**
   * Deaths
   *
   * Min: 0
   */
  deaths: number;

  /**
   * @deprecated Headshot Kill Ratio
   *
   * Min: 0
   */
  headshotKillRatio: number;

  /**
   * @deprecated Headshot Kills
   *
   * Min: 0
   */
  headshotKills: number;

  /**
   * @deprecated Heals
   *
   * Min: 0
   */
  heals: number;

  /**
   * Kill to death average
   *
   * Min: 0
   */
  kda: number;

  /**
   * @deprecated Kills to death ratio
   */
  kdr: number;

  /**
   * @deprecated Kill Streak
   *
   * Min: 0
   */
  killStreak: number;

  /**
   * Kills
   *
   * Min: 0
   */
  kills: number;

  /**
   * @deprecated Longest Kill
   *
   * Min: 0
   */
  longestKill: number;

  /**
   * @deprecated Play Time
   *
   * Min: 0
   */
  playTime: number;

  /**
   * @deprecated Revive Ratio
   *
   * Min: 0
   */
  reviveRatio: number;

  /**
   * @deprecated Revives
   *
   * Min: 0
   */
  revives: number;

  /**
   * @deprecated Round Most Kills
   *
   * Min: 0
   */
  roundMostKills: number;

  /**
   * Rounds Played
   *
   * Min: 0
   */
  roundsPlayed: number;

  /**
   * @deprecated Team Kills
   *
   * Min: 0
   */
  teamKills: number;

  /**
   * Top 10 Ratio
   *
   * Min: 0
   */
  top10Ratio: number;

  /**
   * @deprecated Weapons Acquired
   *
   * Min: 0
   */
  weaponsAcquired: number;

  /**
   * Win Ratio
   *
   * Min: 0
   */
  winRatio: number;

  /**
   * Wins
   *
   * Min: 0
   */
  wins: number;
}

interface MatchGameModeResponse {
  data: Array<{
    /**
     * Match ID
     */
    id: string;

    /**
     * Identifier for this object type ("match")
     */
    type: ResponseObjectType.MATCH;
  }>;
}
