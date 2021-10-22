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

export interface ApiPlayerSeason {
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
     * Stats for each gamemode type
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

export interface PlayerSeason extends Pick<ApiPlayerSeason, "type"> {
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
}

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
   */
  assists: number;

  /**
   * Boosts
   */
  boosts: number;

  /**
   * Daily Kills
   */
  dailyKills: number;

  /**
   * Daily Wins
   */
  dailyWins: number;

  /**
   * Damage Dealt
   */
  damageDealt: number;

  /**
   * Days
   */
  days: number;

  /**
   * Down but not out's
   */
  dBNOs: number;

  /**
   * Headshot Kills
   */
  headshotKills: number;

  /**
   * Heals
   */
  heals: number;

  /**
   * Kill Points
   */
  killPoints: number;

  /**
   * Kills
   */
  kills: number;

  /**
   * Longest Kill
   */
  longestKill: number;

  /**
   * Longest Time Survived
   */
  longestTimeSurvived: number;

  /**
   * Losses
   */
  losses: number;

  /**
   * Max Kill Streaks
   */
  maxKillStreaks: number;

  /**
   * Most Survival Time
   */
  mostSurvivalTime: number;

  /**
   * Rank Points
   */
  rankPoints: number;

  /**
   * Rank Points Title
   */
  rankPointsTitle: string;

  /**
   * Revives
   */
  revives: number;

  /**
   * Ride Distance
   */
  rideDistance: number;

  /**
   * Road Kills
   */
  roadKills: number;

  /**
   * Round Most Kills
   */
  roundMostKills: number;

  /**
   * Rounds Played
   */
  roundsPlayed: number;

  /**
   * Suicides
   */
  suicides: number;

  /**
   * Swim Distance
   */
  swimDistance: number;

  /**
   * Team Kills
   */
  teamKills: number;

  /**
   * Time Survived
   */
  timeSurvived: number;

  /**
   * Top 10's
   */
  top10s: number;

  /**
   * Vehicle Destroys
   */
  vehicleDestroys: number;

  /**
   * Walk Distance
   */
  walkDistance: number;

  /**
   * Weapons Acquired
   */
  weaponsAcquired: 12;

  /**
   * Weekly Kills
   */
  weeklyKills: number;

  /**
   * Weekly Wins
   */
  weeklyWins: number;

  /**
   * Win Points
   */
  winPoints: number;

  /**
   * Wins
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
