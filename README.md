<div align="center">
  <h1>
    <br/>
    <br/>
    🐔
    <br />
    pubg.ts
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    A lightweight PUBG TypeScript API Wrapper</em>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/pubg.ts">
       <img src="https://img.shields.io/npm/v/pubg.ts?label=%20&style=for-the-badge" alt="Package Version" />
    </a>
    <a href="https://www.npmjs.com/package/pubg.ts">
      <img src="https://img.shields.io/npm/dm/pubg.ts?label=%20&style=for-the-badge" alt="Package Monthly Downloads" />
    </a>
    <a href="https://github.com/nurodev/pubg.ts">
      <img src="https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge" alt="Docs" />
    </a>
    <a href="https://documentation.pubg.com/">
      <img src="https://img.shields.io/badge/-API-yellow.svg?style=for-the-badge" alt="API" />
    </a>
    <a href="https://github.com/nurodev/pubg.ts">
      <img src="https://img.shields.io/badge/-Example-white.svg?style=for-the-badge" alt="Example" />
    </a>
  </sup>
  <br />
  <br />
  <br />
  <br />
</div>

## 🚀 Install

Install it locally in your project

```bash
npm i --save pubg.ts

# Or with Yarn

yarn add pubg.ts
```

## 🦄 Usage

### Sign for a developer account

You'll first need to [sign up on the PUBG developer API site](https://developer.playbattlegrounds.com/). Using this account you can create a API token

### Register an app

With an account created, you can [create a new developer application](https://developer.playbattlegrounds.com/apps/new?locale=en) that will provide you with your API key.

### Make something!

Here's a few small examples of what you can do with this library

```typescript
import { Shard, usePlayer, useMatch, useSeason } from "pubg.ts";

// Get a single or multiple player(s) using their name or ID
const player = await usePlayer({
  apiKey: "your_key_goes_here",
  value: "single_name_or_id_or_array_of_such",

  // Optional for all hooks (Default: Steam)
  shard: Shard.STEAM,
});

// Fetch a data from a single match
const match = await useMatch({
  apiKey: "your_key_goes_here",
  id: "a036c694-be29-4dea-833d-b6ff84323de7",
});

// Get the current active season
const activeSeason = await useSeason({
  apiKey: "your_key_goes_here",
});
```

## ❤️ Credits

- [ickerio](https://github.com/ickerio): This project was heavily inspired by [pubg.js](https://github.com/ickerio/pubg.js)
