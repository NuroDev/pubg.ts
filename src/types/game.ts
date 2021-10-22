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
  CONQUEST_DUO = "conquest_duo",

  /**
   * Conquest Duo's (First Person Perspective)
   */
  CONQUEST_DUO_FPP = "conquest_duo_fpp",

  /**
   * Conquest Solo's (Third Person Perspective)
   */
  CONQUEST_SOLO = "conquest_solo",

  /**
   * Conquest Solos' (First Person Perspective)
   */
  CONQUEST_SOLO_FPP = "conquest_solo_fpp",

  /**
   * Conquest Squad (Third Person Perspective)
   */
  CONQUEST_SQUAD = "conquest_squad",

  /**
   * Conquest Squad (First Person Perspective)
   */
  CONQUEST_SQUAD_FPP = "conquest_squad_fpp",

  /**
   * Duo's (Third Person Perspective)
   */
  DUO = "duo",

  /**
   * Duo's (First Person Perspective)
   */
  DUO_FPP = "duo_fpp",

  /**
   * Esports Duo's (Third Person Perspective)
   */
  ESPORTS_DUO = "esports_duo",

  /**
   * Esports Duo's (First Person Perspective)
   */
  ESPORTS_DUO_FPP = "esports_duo_fpp",

  /**
   * Esports Solo's (Third Person Perspective)
   */
  ESPORTS_SOLO = "esports_solo",

  /**
   * Esports Solo's (First Person Perspective)
   */
  ESPORTS_SOLO_FPP = "esports_solo_fpp",

  /**
   * Esports Squad (Third Person Perspective)
   */
  ESPORTS_SQUAD = "esports_squad",

  /**
   * Esports Squad (First Person Perspective)
   */
  ESPORTS_SQUAD_FPP = "esports_squad_fpp",

  /**
   * Unknown (First Person Perspective)
   */
  LAB_FPP = "lab_fpp",

  /**
   * Unknown (Third Person Perspective)
   */
  LAB_TPP = "lab_tpp",

  /**
   * Normal Duo's (Third Person Perspective)
   */
  NORMAL_DUO = "normal_duo",

  /**
   * Normal Duo's (First Person Perspective)
   */
  NORMAL_DUO_FPP = "normal_duo_fpp",

  /**
   * Normal Solo's (Third Person Perspective)
   */
  NORMAL_SOLO = "normal_solo",

  /**
   * Normal Solo's (First Person Perspective)
   */
  NORMAL_SOLO_FPP = "normal_solo_fpp",

  /**
   * Normal Squad (Third Person Perspective)
   */
  NORMAL_SQUAD = "normal_squad",

  /**
   * Normal Squad (First Person Perspective)
   */
  NORMAL_SQUAD_FPP = "normal_squad_fpp",

  /**
   * Solo's (Third Person Perspective)
   */
  SOLO = "solo",

  /**
   * Solo's (First Person Perspective)
   */
  SOLO_FPP = "solo_fpp",

  /**
   * Squad (Third Person Perspective)
   */
  SQUAD = "squad",

  /**
   * Squad (First Person Perspective)
   */
  SQUAD_FPP = "squad_fpp",

  /**
   * Team Deathmatch
   */
  TDM = "tdm",

  /**
   * War Duo's (Third Person Perspective)
   */
  WAR_DUO = "war_duo",

  /**
   * War Duo's (First Person Perspective)
   */
  WAR_DUO_FPP = "war_duo_fpp",

  /**
   * War Solo's (Third Person Perspective)
   */
  WAR_SOLO = "war_solo",

  /**
   * War Solo's (First Person Perspective)
   */
  WAR_SOLO_FPP = "war_solo_fpp",

  /**
   * War Squad (Third Person Perspective)
   */
  WAR_SQUAD = "war_squad",

  /**
   * War Squad (First Person Perspective)
   */
  WAR_SQUAD_FPP = "war_squad_fpp",

  /**
   * Zombie Duo's (Third Person Perspective)
   */
  ZOMBIE_DUO = "zombie_duo",

  /**
   * Zombie Duo's (First Person Perspective)
   */
  ZOMBIE_DUO_FPP = "zombie_duo_fpp",

  /**
   * Zombie Solo's (Third Person Perspective)
   */
  ZOMBIE_SOLO = "zombie_solo",

  /**
   * Zombie Solo's (First Person Perspective)
   */
  ZOMBIE_SOLO_FPP = "zombie_solo_fpp",

  /**
   * Zombie Squad (Third Person Perspective)
   */
  ZOMBIE_SQUAD = "zombie_squad",

  /**
   * Zombie Squad (First Person Perspective)
   */
  ZOMBIE_SQUAD_FPP = "zombie_squad_fpp",
}
