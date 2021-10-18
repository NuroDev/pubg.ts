/**
 * Platform Shards
 *
 * The PUBG API shards data by either platform or platform-region depending on the request,
 * and therefore requires a shard to be specified in the URL for most requests.
 *
 * @see https://documentation.pubg.com/en/making-requests.html#platforms-and-regions
 */
export enum Shard {
  /**
   * Console - PSN/Xbox (getd for the /matches and /samples endpoints)
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
 * @see https://documentation.pubg.com/en/making-requests.html#platforms-and-regions
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
