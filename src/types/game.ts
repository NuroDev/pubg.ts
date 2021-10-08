import type { ResponseObjectType } from ".";

/**
 * Death Type
 *
 * All the possible ways a player can die during a game
 */
export enum DeathType {
  /**
   * Alive
   *
   * The player is still alive in the world
   */
  ALIVE = "alive",

  /**
   * By Player
   *
   * Killed by another player in the world
   */
  BYPLAYER = "byplayer",

  /**
   * By Zone
   *
   * Killed by the zone doing damage to the player
   */
  BYZONE = "byzone",

  /**
   * Logout
   *
   * The player logged out of the game
   */
  LOGOUT = "logout",

  /**
   * Suicide
   *
   * The player inflicted damage on themselves
   */
  SUICIDE = "suicide",
}

/**
 * Map
 *
 * The name of the map for a specific game
 */
export enum Map {
  /**
   * Baltic Map
   */
  BALTIC_MAIN = "Baltic_Main",

  /**
   * Desert Map
   */
  DESERT_MAIN = "Desert_Main",

  /**
   * DihorOtok Map
   */
  DIHOROTOK_MAIN = "DihorOtok_Main",

  /**
   * Erangel Map
   */
  ERANGEL_MAIN = "Erangel_Main",

  /**
   * Range Map
   */
  RANGE_MAIN = "Range_Main",

  /**
   * Savage Map
   */
  SAVAGE_MAIN = "Savage_Main",

  /**
   * Summerland Map
   */
  SUMMERLAND_MAIN = "Summerland_Main",
}

/**
 * Match Type
 *
 * The type of matches that can be played
 */
export enum MatchType {
  /**
   * @todo Unknown
   */
  AIROYALE = "airoyale",

  /**
   * @todo Unknown
   */
  ARCADE = "arcade",

  /**
   * @todo Unknown
   */
  CUSTOM = "custom",

  /**
   * @todo Unknown
   */
  EVENT = "event",

  /**
   * @todo Unknown
   */
  OFFICIAL = "official",

  /**
   * @todo Unknown
   */
  SEASONAL = "seasonal",

  /**
   * @todo Unknown
   */
  TRAINING = "training",
}

/**
 * Season
 *
 * @see https://documentation.pubg.com/en/seasons-endpoint.html
 */
export interface Season {
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
   * Used to lookup a player's stats for this season on the /players endpoint
   */
  id: string;

  /**
   * Identifier for this object type ("season")
   */
  type: ResponseObjectType.SEASON;
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

/**
 * Gamemodes
 *
 * For some requests, a gamemode is also required to be speicifed in the request URL
 *
 * @see https://documentation.pubg.com/en/making-requests.html#game-modes
 */
export enum Gamemode {
  /**
   * Unknown
   */
  CONQUEST_DUO = "conquest_duo",

  /**
   * Unknown
   */
  CONQUEST_DUO_FPP = "conquest_duo_fpp",

  /**
   * Unknown
   */
  CONQUEST_SOLO = "conquest_solo",

  /**
   * Unknown
   */
  CONQUEST_SOLO_FPP = "conquest_solo_fpp",

  /**
   * Unknown
   */
  CONQUEST_SQUAD = "conquest_squad",

  /**
   * Unknown
   */
  CONQUEST_SQUAD_FPP = "conquest_squad_fpp",

  /**
   * Up to 2 people per team, third person perspective
   */
  DUO = "duo",

  /**
   * Up to 2 people per team, first person perspective
   */
  DUO_FPP = "duo_fpp",

  /**
   * Unknown
   */
  ESPORTS_DUO = "esports_duo",

  /**
   * Unknown
   */
  ESPORTS_DUO_FPP = "esports_duo_fpp",

  /**
   * Unknown
   */
  ESPORTS_SOLO = "esports_solo",

  /**
   * Unknown
   */
  ESPORTS_SOLO_FPP = "esports_solo_fpp",

  /**
   * Unknown
   */
  ESPORTS_SQUAD = "esports_squad",

  /**
   * Unknown
   */
  ESPORTS_SQUAD_FPP = "esports_squad_fpp",

  /**
   * Unknown
   */
  LAB_FPP = "lab_fpp",

  /**
   * Unknown
   */
  LAB_TPP = "lab_tpp",

  /**
   * Unknown
   */
  NORMAL_DUO = "normal_duo",

  /**
   * Unknown
   */
  NORMAL_DUO_FPP = "normal_duo_fpp",

  /**
   * Unknown
   */
  NORMAL_SOLO = "normal_solo",

  /**
   * Unknown
   */
  NORMAL_SOLO_FPP = "normal_solo_fpp",

  /**
   * Unknown
   */
  NORMAL_SQUAD = "normal_squad",

  /**
   * Unknown
   */
  NORMAL_SQUAD_FPP = "normal_squad_fpp",

  /**
   * 1 player per team, third person perspective
   */
  SOLO = "solo",

  /**
   * 1 player per team, first person perspective
   */
  SOLO_FPP = "solo_fpp",

  /**
   * More than 2 people per team, third person perspective
   */
  SQUAD = "squad",

  /**
   * More than 2 people per team, first person perspective
   */
  SQUAD_FPP = "squad_fpp",

  /**
   * Unknown
   */
  TDM = "tdm",

  /**
   * Unknown
   */
  WAR_DUO = "war_duo",

  /**
   * Unknown
   */
  WAR_DUO_FPP = "war_duo_fpp",

  /**
   * Unknown
   */
  WAR_SOLO = "war_solo",

  /**
   * Unknown
   */
  WAR_SOLO_FPP = "war_solo_fpp",

  /**
   * Unknown
   */
  WAR_SQUAD = "war_squad",

  /**
   * Unknown
   */
  WAR_SQUAD_FPP = "war_squad_fpp",

  /**
   * Unknown
   */
  ZOMBIE_DUO = "zombie_duo",

  /**
   * Unknown
   */
  ZOMBIE_DUO_FPP = "zombie_duo_fpp",

  /**
   * Unknown
   */
  ZOMBIE_SOLO = "zombie_solo",

  /**
   * Unknown
   */
  ZOMBIE_SOLO_FPP = "zombie_solo_fpp",

  /**
   * Unknown
   */
  ZOMBIE_SQUAD = "zombie_squad",

  /**
   * Unknown
   */
  ZOMBIE_SQUAD_FPP = "zombie_squad_fpp",
}
