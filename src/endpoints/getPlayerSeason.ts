import { ResponseObjectType } from "..";
import { fetch } from "../util";

import type {
  ApiPlayerSeason,
  BaseResponse,
  Player,
  PlayerSeason,
  Result,
  Season,
} from "..";
import type { WithApiShard } from "../types/util";

export interface PlayerSeasonOptions extends WithApiShard {
  /**
   * Player object or id
   */
  player: Player | string;

  /**
   * Fetch player ranked statistics
   */
  ranked?: boolean;

  /**
   * Season object or id
   */
  season: Season | string;
}

interface ApiPlayerSeasonResponse extends BaseResponse {
  /**
   * A players stats & season data
   *
   * @see https://documentation.pubg.com/en/seasons-endpoint.html#/Season_Stats
   */
  data: ApiPlayerSeason;
}

export type PlayerSeasonResponse = Result<PlayerSeason>;

/**
 * Get data for a single season of a player(s) by a given id or name
 *
 * @param {Object} options - Player Season Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function getPlayerSeason({
  player,
  ranked = false,
  season,
  ...rest
}: PlayerSeasonOptions): PlayerSeasonResponse {
  const { playerId, shard } =
    typeof player === "object"
      ? { playerId: player.id, shard: player.shardId }
      : { playerId: player, shard: rest.shard };

  const seasonId = typeof season === "object" ? season.id : season;

  const response = await fetch<ApiPlayerSeasonResponse>({
    ...rest,
    endpoint: `players/${playerId}/seasons/${seasonId}${
      ranked ? "/ranked" : ""
    }`,
    shard,
  });

  if (response.error) return response;

  const { data } = response.data;

  switch (data.type) {
    case ResponseObjectType.PLAYER_SEASON:
      const matches = Object.fromEntries(
        Object.entries(data.relationships).map(([key, value]) => {
          if (key === "player" || key === "season") return [];

          return [key, value];
        })
      );

      return {
        data: {
          bestRankPoint: data.attributes.bestRankPoint ?? undefined,
          gamemodeStats: data.attributes.gameModeStats,
          matches,
          playerId: data.relationships.player.data.id,
          seasonId: data.relationships.season.data.id,
          type: data.type,
        },
        error: null,
      };
    case ResponseObjectType.RANKED_PLAYER_SEASON:
      return {
        data: {
          playerId: data.relationships.player.data.id,
          rankedGameModeStats: data.attributes.rankedGameModeStats,
          seasonId: data.relationships.season.data.id,
          type: data.type,
        },
        error: null,
      };
  }
}
