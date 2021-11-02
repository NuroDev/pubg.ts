import { Client, getPlayer } from "../dist";
import { playerNames, playerIds } from "./data";

import type { Player } from "../dist";

const apiKey = process.env.PUBG_API_KEY as string;
const singlePlayer = {
  name: playerNames[0],
  id: playerIds[0],
};
const client = new Client({
  apiKey,
});

describe("Single Player (Name)", () => {
  it("With Client", async () => {
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

  it("With Hook", async () => {
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
});

describe("Multiple Players (Name)", () => {
  it("With Client", async () => {
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

  it("With Hook", async () => {
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
