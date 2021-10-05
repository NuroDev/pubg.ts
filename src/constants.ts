import { homepage, version } from "../package.json";

export const BASE_HEADERS = {
  "User-Agent": `pubg.ts v${version} (${homepage})`,
  accept: "application/vnd.api+json",
};

export const BASE_URL = "https://api.pubg.com/";
