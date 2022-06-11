import dotenv from "dotenv";
import { beforeAll, describe, it, expect } from "vitest";

import { Client } from "~/client";
import { Gamemode, Shard, Map, MatchType } from "~/types";
import { getMatch, getPlayer } from "~/modules";
import { patternMatchUUID, testPlayers } from "~/util/tests";
import { ResponseObjectType } from "~/util/types";

describe("Get Match", () => {
  let apiKey: string;
  let matchIds: Array<string>;
  let singleMatchId: string;

  beforeAll(async () => {
    dotenv.config();
    apiKey = process.env.PUBG_API_KEY;

    const { data: player, error } = await getPlayer({
      apiKey,
      id: true,
      value: testPlayers[0].id,
    });

    expect(error).toBeNull();

    expect(player).toBeTypeOf("object");

    expect(Array.isArray(player)).toBe(true);

    matchIds = player![0].matches.map(({ id }) => id);
    singleMatchId = matchIds[0];
  });

  describe.concurrent("Function", () => {
    it.concurrent("Single Match", async () => {
      const { data: match, error } = await getMatch({
        apiKey,
        id: singleMatchId,
      });

      expect(error).toBeNull();

      expect(match).toBeTypeOf("object");

      expect(match).toStrictEqual(
        expect.objectContaining({
          assets: expect.arrayContaining([
            expect.objectContaining({
              id: expect.stringMatching(patternMatchUUID),
              type: "asset",
            }),
          ]),
          id: expect.stringMatching(patternMatchUUID),
          members: expect.arrayContaining([
            expect.objectContaining({
              id: expect.stringMatching(patternMatchUUID),
            }),
          ]),
          type: ResponseObjectType.MATCH,
        })
      );

      expect(match?.gameMode).oneOf(Object.values(Gamemode));
      expect(match?.mapName).oneOf(Object.values(Map));
      expect(match?.matchType).oneOf(Object.values(MatchType));
      expect(match?.shardId).oneOf(Object.values(Shard));
    });
  });

  describe.concurrent("Client", () => {
    const client = new Client({
      apiKey,
    });

    it.concurrent("Single Match", async () => {
      const { data: match, error } = await client.getMatch({
        id: singleMatchId,
      });

      expect(error).toBeNull();

      expect(match).toBeTypeOf("object");

      expect(match).toStrictEqual(
        expect.objectContaining({
          assets: expect.arrayContaining([
            expect.objectContaining({
              id: expect.stringMatching(patternMatchUUID),
              type: "asset",
            }),
          ]),
          id: expect.stringMatching(patternMatchUUID),
          members: expect.arrayContaining([
            expect.objectContaining({
              id: expect.stringMatching(patternMatchUUID),
            }),
          ]),
          type: ResponseObjectType.MATCH,
        })
      );

      expect(match?.gameMode).oneOf(Object.values(Gamemode));
      expect(match?.mapName).oneOf(Object.values(Map));
      expect(match?.matchType).oneOf(Object.values(MatchType));
      expect(match?.shardId).oneOf(Object.values(Shard));
    });
  });

  /**
   * @todo Add tests with bad data expecting error response
   * ```
   * describe.concurrent("Invalid Data", () => {});
   * ```
   */
});
