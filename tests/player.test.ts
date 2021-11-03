import { Client, getPlayer } from "..";
import { playerNames, playerIds } from "./common";

import type { Player } from "../dist";

const apiKey = process.env.PUBG_API_KEY as string;
const singlePlayer = {
  name: playerNames[0],
  id: playerIds[0],
};
const client = new Client({
  apiKey,
});

describe("Player", () => {
  describe("Client", () => {
    it("Single Player", async () => {
      const player = await client.getPlayer({
        value: singlePlayer.name,
      });

      expect(Array.isArray(player)).toBe(false);

      expect(player).toEqual(
        expect.objectContaining({
          name: singlePlayer.name,
          type: "player",
        })
      );
    });

    it("Multiple Players", async () => {
      const players = await client.getPlayer({
        value: [...playerNames],
      });

      expect(Array.isArray(players)).toBe(true);

      (players as Array<Player>).forEach((p, i) =>
        expect(p).toEqual(
          expect.objectContaining({
            name: playerNames[i],
            type: "player",
          })
        )
      );
    });
  });

  describe("Function", () => {
    it("Single Player", async () => {
      const player = await getPlayer({
        apiKey,
        value: singlePlayer.name,
      });

      expect(Array.isArray(player)).toBe(false);

      expect(player).toEqual(
        expect.objectContaining({
          name: singlePlayer.name,
          type: "player",
        })
      );
    });

    it("Multiple Players", async () => {
      const player = await getPlayer({
        apiKey,
        value: [...playerNames],
      });

      expect(Array.isArray(player)).toBe(true);

      (player as Array<Player>).forEach((p, i) =>
        expect(p).toEqual(
          expect.objectContaining({
            name: playerNames[i],
            type: "player",
          })
        )
      );
    });
  });
});
