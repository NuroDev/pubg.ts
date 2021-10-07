/**
 * Platform Shards
 *
 * The PUBG API shards data by either platform or platform-region depending on the request,
 * and therefore requires a shard to be specified in the URL for most requests.
 *
 * Docs: https://documentation.pubg.com/en/making-requests.html#platforms-and-regions
 */
export enum Shard {
  /**
   * Console - PSN/Xbox (used for the /matches and /samples endpoints)
   */
  CONSOLE = "console",
  /**
   * Kakao
   */
  KAKAO = "kakao",
  /**
   * PayStation Network
   */
  PSN = "psn",
  /**
   * Google Stadia
   */
  STADIA = "stadia",
  /**
   * Steam
   */
  STEAM = "steam",
  /**
   * Tournament
   */
  TOURNAMENT = "tournament",
  /**
   * Xbox
   */
  XBOX = "xbox",
}

/**
 * Platform Regions
 *
 * The PUBG API shards data by either platform or platform-region depending on the request,
 * and therefore requires a shard to be specified in the URL for most requests.
 *
 * Docs: https://documentation.pubg.com/en/making-requests.html#platforms-and-regions
 */
export enum Region {
  /**
   * Asia
   */
  PC_AS = "pc-as",
  /**
   * Europe
   */
  PC_EU = "pc-eu",
  /**
   * Japan
   */
  PC_JP = "pc-jp",
  /**
   * Kakao
   */
  PC_KAKAO = "pc-kakao",
  /**
   * Korea
   */
  PC_KRJP = "pc-krjp",
  /**
   * North America
   */
  PC_NA = "pc-na",
  /**
   * Oceania
   */
  PC_OC = "pc-oc",
  /**
   * Russia
   */
  PC_RU = "pc-ru",
  /**
   * South and Central America
   */
  PC_SA = "pc-sa",
  /**
   * South East Asia
   */
  PC_SEA = "pc-sea",
  /**
   * Tournaments
   */
  PC_TOURNAMENT = "pc-tournament",
  /**
   * Asia
   */
  PSN_AS = "psn-as",
  /**
   * Europe
   */
  PSN_EU = "psn-eu",
  /**
   * North America
   */
  PSN_NA = "psn-na",
  /**
   * Oceania
   */
  PSN_OC = "psn-oc",
  /**
   * Asia
   */
  XBOX_AS = "xbox-as",
  /**
   * Europe
   */
  XBOX_EU = "xbox-eu",
  /**
   * North America
   */
  XBOX_NA = "xbox-na",
  /**
   * Oceania
   */
  XBOX_OC = "xbox-oc",
  /**
   * South America
   */
  XBOX_SA = "xbox-sa",
}

/**
 * Gamemodes
 *
 * For some requests, a game mode is also required to be speicifed in the request URL.
 *
 * Docs: https://documentation.pubg.com/en/making-requests.html#game-modes
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
