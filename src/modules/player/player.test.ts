import dotenv from "dotenv";
import { beforeAll, describe, it, expect } from "vitest";

import { Client } from "~/client";
import { getPlayer } from "~/modules";
import {
  patternMatchAccountId,
  patternMatchUUID,
  testPlayers,
} from "~/util/tests";
import { ResponseObjectType } from "~/util/types";
import { Shard } from "~/types";

describe("Get Player", () => {
  let apiKey: string;

  beforeAll(async () => {
    dotenv.config();
    apiKey = process.env.PUBG_API_KEY;
  });

  describe.concurrent("Function", () => {
    it.concurrent("Single player name", async () => {
      const { name: playerName, id: playerId } = testPlayers[0];

      const { data: player, error } = await getPlayer({
        apiKey,
        id: false,
        value: playerName,
      });

      expect(error).toBeNull();

      expect(player).toBeTypeOf("object");

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: playerId,
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            name: playerName,
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });

    it.concurrent("Single player ID", async () => {
      const { id: playerId, name: playerName } = testPlayers[0];

      const { data: player, error } = await getPlayer({
        apiKey,
        id: true,
        value: playerId,
      });

      expect(error).toBeNull();

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: playerId,
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            name: playerName,
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });

    it.concurrent("Multiple player names", async () => {
      const { data: player, error } = await getPlayer({
        apiKey,
        id: false,
        value: testPlayers.map(({ name }) => name),
      });

      expect(error).toBeNull();

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.stringMatching(patternMatchAccountId),
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });

    it.concurrent("Multiple player ID's", async () => {
      const { data: player, error } = await getPlayer({
        apiKey,
        id: true,
        value: testPlayers.map(({ id }) => id),
      });

      expect(error).toBeNull();

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.stringMatching(patternMatchAccountId),
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });
  });

  describe.concurrent("Client", () => {
    const client = new Client({
      apiKey,
    });

    it.concurrent("Single player name", async () => {
      const { name: playerName, id: playerId } = testPlayers[0];

      const { data: player, error } = await client.getPlayer({
        id: false,
        value: playerName,
      });

      expect(error).toBeNull();

      expect(player).toBeTypeOf("object");

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: playerId,
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            name: playerName,
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });

    it.concurrent("Single player ID", async () => {
      const { id: playerId, name: playerName } = testPlayers[0];

      const { data: player, error } = await client.getPlayer({
        id: true,
        value: playerId,
      });

      expect(error).toBeNull();

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: playerId,
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            name: playerName,
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });

    it.concurrent("Multiple player names", async () => {
      const { data: player, error } = await client.getPlayer({
        id: false,
        value: testPlayers.map(({ name }) => name),
      });

      expect(error).toBeNull();

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.stringMatching(patternMatchAccountId),
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });

    it.concurrent("Multiple player ID's", async () => {
      const { data: player, error } = await client.getPlayer({
        id: true,
        value: testPlayers.map(({ id }) => id),
      });

      expect(error).toBeNull();

      expect(Array.isArray(player)).toBe(true);

      expect(player).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.stringMatching(patternMatchAccountId),
            matches: expect.arrayContaining([
              expect.objectContaining({
                id: expect.stringMatching(patternMatchUUID),
                type: "match",
              }),
            ]),
            type: ResponseObjectType.PLAYER,
          }),
        ])
      );

      expect(player![0]?.shardId).oneOf(Object.values(Shard));
    });
  });

  /**
   * @todo Add tests with bad data expecting error response
   * ```
   * describe.concurrent("Invalid Data", () => {});
   * ```
   */
});
