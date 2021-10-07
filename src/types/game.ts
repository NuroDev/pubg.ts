export enum DeathType {
  ALIVE = "alive",
  BYPLAYER = "byplayer",
  BYZONE = "byzone",
  LOGOUT = "logout",
  SUICIDE = "suicide",
}

export enum Map {
  BALTIC_MAIN = "Baltic_Main",
  DESERT_MAIN = "Desert_Main",
  DIHOROTOK_MAIN = "DihorOtok_Main",
  ERANGEL_MAIN = "Erangel_Main",
  RANGE_MAIN = "Range_Main",
  SAVAGE_MAIN = "Savage_Main",
  SUMMERLAND_MAIN = "Summerland_Main",
}

export enum MatchType {
  AIROYALE = "airoyale",
  ARCADE = "arcade",
  CUSTOM = "custom",
  EVENT = "event",
  OFFICIAL = "official",
  SEASONAL = "seasonal",
  TRAINING = "training",
}

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
  type: "season";
}

export enum SeasonState {
  CLOSED = "closed",
  PREPARE = "prepare",
  PROGRESS = "progress",
}
