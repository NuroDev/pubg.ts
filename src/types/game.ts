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
 * Gamemodes
 *
 * For some requests, a gamemode is also required to be speicifed in the request URL
 *
 * @see https://documentation.pubg.com/en/making-requests.html#game-modes
 */
export enum Gamemode {
  /**
   * Conquest Duo's (Third Person Perspective)
   */
  CONQUEST_DUO = "conquest-duo",

  /**
   * Conquest Duo's (First Person Perspective)
   */
  CONQUEST_DUO_FPP = "conquest-duo-fpp",

  /**
   * Conquest Solo's (Third Person Perspective)
   */
  CONQUEST_SOLO = "conquest-solo",

  /**
   * Conquest Solos' (First Person Perspective)
   */
  CONQUEST_SOLO_FPP = "conquest-solo-fpp",

  /**
   * Conquest Squad (Third Person Perspective)
   */
  CONQUEST_SQUAD = "conquest-squad",

  /**
   * Conquest Squad (First Person Perspective)
   */
  CONQUEST_SQUAD_FPP = "conquest-squad-fpp",

  /**
   * Duo's (Third Person Perspective)
   */
  DUO = "duo",

  /**
   * Duo's (First Person Perspective)
   */
  DUO_FPP = "duo-fpp",

  /**
   * Esports Duo's (Third Person Perspective)
   */
  ESPORTS_DUO = "esports-duo",

  /**
   * Esports Duo's (First Person Perspective)
   */
  ESPORTS_DUO_FPP = "esports-duo-fpp",

  /**
   * Esports Solo's (Third Person Perspective)
   */
  ESPORTS_SOLO = "esports-solo",

  /**
   * Esports Solo's (First Person Perspective)
   */
  ESPORTS_SOLO_FPP = "esports-solo-fpp",

  /**
   * Esports Squad (Third Person Perspective)
   */
  ESPORTS_SQUAD = "esports-squad",

  /**
   * Esports Squad (First Person Perspective)
   */
  ESPORTS_SQUAD_FPP = "esports-squad-fpp",

  /**
   * Unknown (First Person Perspective)
   */
  LAB_FPP = "lab-fpp",

  /**
   * Unknown (Third Person Perspective)
   */
  LAB_TPP = "lab-tpp",

  /**
   * Normal Duo's (Third Person Perspective)
   */
  NORMAL_DUO = "normal-duo",

  /**
   * Normal Duo's (First Person Perspective)
   */
  NORMAL_DUO_FPP = "normal-duo-fpp",

  /**
   * Normal Solo's (Third Person Perspective)
   */
  NORMAL_SOLO = "normal-solo",

  /**
   * Normal Solo's (First Person Perspective)
   */
  NORMAL_SOLO_FPP = "normal-solo-fpp",

  /**
   * Normal Squad (Third Person Perspective)
   */
  NORMAL_SQUAD = "normal-squad",

  /**
   * Normal Squad (First Person Perspective)
   */
  NORMAL_SQUAD_FPP = "normal-squad-fpp",

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

  /**
   * Team Deathmatch
   */
  TDM = "tdm",

  /**
   * War Duo's (Third Person Perspective)
   */
  WAR_DUO = "war-duo",

  /**
   * War Duo's (First Person Perspective)
   */
  WAR_DUO_FPP = "war-duo-fpp",

  /**
   * War Solo's (Third Person Perspective)
   */
  WAR_SOLO = "war-solo",

  /**
   * War Solo's (First Person Perspective)
   */
  WAR_SOLO_FPP = "war-solo-fpp",

  /**
   * War Squad (Third Person Perspective)
   */
  WAR_SQUAD = "war-squad",

  /**
   * War Squad (First Person Perspective)
   */
  WAR_SQUAD_FPP = "war-squad-fpp",

  /**
   * Zombie Duo's (Third Person Perspective)
   */
  ZOMBIE_DUO = "zombie-duo",

  /**
   * Zombie Duo's (First Person Perspective)
   */
  ZOMBIE_DUO_FPP = "zombie-duo-fpp",

  /**
   * Zombie Solo's (Third Person Perspective)
   */
  ZOMBIE_SOLO = "zombie-solo",

  /**
   * Zombie Solo's (First Person Perspective)
   */
  ZOMBIE_SOLO_FPP = "zombie-solo-fpp",

  /**
   * Zombie Squad (Third Person Perspective)
   */
  ZOMBIE_SQUAD = "zombie-squad",

  /**
   * Zombie Squad (First Person Perspective)
   */
  ZOMBIE_SQUAD_FPP = "zombie-squad-fpp",
}
