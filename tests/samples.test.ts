import { Client, getSamples } from "..";

const apiKey = process.env.PUBG_API_KEY as string;
const client = new Client({
  apiKey,
});
const today = new Date();
const yesterday = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDay() - 1
);

describe("Samples", () => {
  describe("Client", () => {
    it("Yesterday", async () => {
      const samples = await client.getSamples({
        createdAt: yesterday,
      });

      expect(samples);
    });
  });

  describe("Function", () => {
    it("Yesterday", async () => {
      const samples = await getSamples({
        apiKey,
        createdAt: yesterday,
      });

      expect(samples);
    });
  });
});
