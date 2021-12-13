import { ResponseObjectType } from "..";
import { chunkify, fetch, fetchAll } from "../util";

import type {
  ApiPlayerSeason,
  BaseResponse,
  GameModeStatGamemode,
  PlayerSeason,
  PromiseResult,
  Season,
} from "..";
import type { WithApiShard } from "../types/util";

export interface PlayerSeasonOptions extends WithApiShard {
  /**
   * Gamemode type
   */
  gamemode: GameModeStatGamemode;

  /**
   * Player object or id
   */
  player: string | Array<string>;

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

export type PlayerSeasonResponse = PromiseResult<
  PlayerSeason | Array<PlayerSeason>
>;

/**
 * Get data for a single season of a player(s) by a given id or name
 *
 * @param {Object} options - Player Season Options
 * @param {string} options.apiKey - PUBG Developer API key
 * @param {string | undefined} [options.shard] - Platform Shard
 */
export async function getPlayerSeason({
  gamemode,
  player,
  ranked = false,
  season,
  ...rest
}: PlayerSeasonOptions): PlayerSeasonResponse {
  const seasonId = typeof season === "object" ? season.id : season;

  if (ranked)
    return {
      data: null,
      error: {
        title: "Unimplemented",
        detail: "Ranked player season stats are currently not supported",
      },
    };

  if (Array.isArray(player)) {
    const fetchOptions = chunkify(player).map((chunk) => ({
      ...rest,
      endpoint: `seasons/${seasonId}/gameMode/${gamemode}/players`,
      params: {
        ["filter[playerIds]"]: chunk.join(","),
      },
    }));

    const responses = await fetchAll<ApiPlayerSeasonResponse>(fetchOptions);

    const error = responses.find((res) => res.error !== null);
    if (error && error.error) return error;

    const data = responses.map(({ data }) => data!.data).flat();

    return {
      data: data.map((d) => handlePlayerSeasonData(d)),
      error: null,
    };
  }

  const response = await fetch<ApiPlayerSeasonResponse>({
    ...rest,
    endpoint: `players/${player}/seasons/${seasonId}`,
  });

  if (response.error) return response;

  return {
    data: handlePlayerSeasonData(response.data.data),
    error: null,
  };
}

function handlePlayerSeasonData(data: ApiPlayerSeason): PlayerSeason {
  switch (data.type) {
    case ResponseObjectType.PLAYER_SEASON:
      return {
        bestRankPoint: data.attributes.bestRankPoint ?? undefined,
        gamemodeStats: data.attributes.gameModeStats,
        matches: Object.fromEntries(
          Object.entries(data.relationships).map(([key, value]) =>
            key === "player" || key === "season" ? [] : [key, value]
          )
        ),
        playerId: data.relationships.player.data.id,
        seasonId: data.relationships.season.data.id,
        type: data.type,
      };
    case ResponseObjectType.RANKED_PLAYER_SEASON:
      return {
        playerId: data.relationships.player.data.id,
        rankedGameModeStats: data.attributes.rankedGameModeStats,
        seasonId: data.relationships.season.data.id,
        type: data.type,
      };
  }
}
