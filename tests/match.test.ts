import {
  Client,
  Gamemode,
  getMatch,
  getPlayer,
  Map,
  MatchType,
  Shard,
} from "..";
import { playerNames, expectEnum, patternMatchUUID } from "./common";

import type { Match } from "..";

const apiKey = process.env.PUBG_API_KEY as string;
const client = new Client({
  apiKey,
});

const validMatch = (_match: Match) => ({
  // Unknown
  // isCustomMatch: false,
  // stats: null,
  // tags: null,

  // TODO:
  // createdAt: "2021-11-02T12:42:18Z", // Valid date
  // seasonState: "progress", // Enum season state
  // titleId: "bluehole-pubg", // Enum title Id

  // WIP
  //   assets: expect.arrayContaining(
  //     expect.objectContaining({
  //       id: expect.stringMatching(patternMatchUUID),
  //       type: ResponseObjectType.ASSET,
  //     })
  //   ),
  //   duration: expect(typeof match.duration).toBe("number"),
  id: expect.stringMatching(patternMatchUUID),
});

describe("Match", () => {
  let matchIds: Array<string>;
  let singleMatchId: string;

  beforeAll(async () => {
    const player = await getPlayer({
      apiKey,
      value: playerNames[0],
    });

    expect(Array.isArray(player)).toBe(false);

    matchIds = Array.isArray(player)
      ? player[0].matches.map(({ id }) => id)
      : player.matches.map(({ id }) => id);

    singleMatchId = matchIds[0];
  });

  describe("Client", () => {
    it("Single Match", async () => {
      const match = await client.getMatch({
        id: singleMatchId,
      });

      // TODO: Move to `validMatch`
      expectEnum<Gamemode>(Gamemode, match.gameMode);
      // gameMode: expectEnum<Gamemode>(Gamemode, match.gameMode),
      expectEnum<Map>(Map, match.mapName);
      // mapName: expectEnum<Map>(Map, match.mapName),
      expectEnum<MatchType>(MatchType, match.matchType);
      // matchType: expectEnum<MatchType>(MatchType, match.matchType),
      expectEnum<Shard>(Shard, match.shardId);
      // shardId: expectEnum<Shard>(Shard, match.shardId),

      expect(match).toEqual(expect.objectContaining(validMatch(match)));
    });
  });

  describe("Function", () => {
    it("Single Match", async () => {
      const match = await getMatch({
        apiKey,
        id: singleMatchId,
      });

      expect(match).toEqual(expect.objectContaining(validMatch(match)));
    });
  });
});
