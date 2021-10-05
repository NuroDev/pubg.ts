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
    <a href="https://www.npmjs.com/package/pubg.ts">
       <img src="https://img.shields.io/npm/v/vite-plugin-splitbee?label=%20&style=for-the-badge" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/pubg.ts">
      <img src="https://img.shields.io/npm/dm/vite-plugin-splitbee?label=%20&style=for-the-badge" alt="npm downloads" />
    </a>
    <a href="https://github.com/nurodev/pubg.ts">
      <img src="https://img.shields.io/badge/-Docs%20-blue.svg?style=for-the-badge" alt="Docs" />
    </a>
    <a href="https://github.com/nurodev/pubg.ts">
      <img src="https://img.shields.io/badge/-Example%20-white.svg?style=for-the-badge" alt="Example" />
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
import { Client } from "pubg.ts";

// Create a new client instance
const client = new Client({
  apiKey: "your_key_goes_here",
  shard: "optionally_provide_a_custom_shard",
});

// Get a single player using their name
const player = await client.getPlayer({
  name: "PUBG_Username",
});

// Retrieve thousands of recent matches & get stats for any of them
const samples = await client.getSamples();

// Fetch a data from a single match
const match = await client.getMatch({
  id: "a036c694-be29-4dea-833d-b6ff84323de7",
});
```

## ❤️ Credits

- [ickerio](https://github.com/ickerio): This project was heavily inspired by [pubg.js](https://github.com/ickerio/pubg.js)
