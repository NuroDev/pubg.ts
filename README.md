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
  </sup>
  
  [![Tests](https://img.shields.io/github/workflow/status/nurodev/pubg.ts/CI?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/nurodev/pubg.ts)
  [![Package Version](https://img.shields.io/npm/v/pubg.ts?label=%20&style=for-the-badge)](https://www.npmjs.com/package/pubg.ts)
  [![Package Monthly Downloads](https://img.shields.io/npm/dm/pubg.ts?color=blue&label=%20&style=for-the-badge)](https://www.npmjs.com/package/pubg.ts)
  [![API](https://img.shields.io/badge/-API-yellow.svg?style=for-the-badge)](https://documentation.pubg.com)
  
</div>

## ✨ Features

- ❗ Stirctly typed
- ⚡ Request batching
- ✍️ Verbose documentation
- ⚠️ Error handling

## 🚀 Install

Install it locally in your project

```bash
npm i --save pubg.ts

# Or with Yarn

yarn add pubg.ts
```

For use in the browser, check out the following:

- ⚛️ [`react-pubg`](https://github.com/nurodev/react-pubg)

## 🦄 Usage

### Sign for a developer account

You'll first need to [sign up on the PUBG developer API site](https://developer.playbattlegrounds.com/). Using this account you can create a API token

### Register an app

With an account created, you can [create a new developer application](https://developer.playbattlegrounds.com/apps/new?locale=en) that will provide you with your API key.

### Basic

As a basic example here's how to fetch player data:

```typescript
import { getPlayer } from "pubg.ts";

const { data, error } = await getPlayer({
  value: "YOUR_NAME_HERE",
});

console.log({ data, error });
```

## 📕 Documentation

Here is a breakdown of all modules that the package provides & how to use them:

<details>
  <summary>Match</summary>
  
  ## Match

Get a match from a specificed match id.

---

Get started using the module function:

```typescript
import { getMatch } from "pubg.ts";

const { data, error } = await getMatch({
  apiKey: "...",
  id: "a036c694-be29-4dea-833d-b6ff84323de7",
});
```

Or using the client:

```typescript
import { Client } from "pubg.ts";

const client = new Client({
  apiKey: "...",
});

const { data, error } = await getMatch({
  id: "a036c694-be29-4dea-833d-b6ff84323de7",
});
```

</details>

<details>
  <summary>Player</summary>
  
  ## Player

Get player(s) by a given name(s) or id(s).

---

Get started using the module function:

```typescript
import { getPlayer } from "pubg.ts";

// Using a player name
const { data, error } = await getPlayer({
  apiKey: "...",
  value: "YOUR_NAME_HERE",
});

// Using a player ID
const { data, error } = await getPlayer({
  apiKey: "...",
  id: true,
  value: "account.ABC123",
});
```

Or using the client:

```typescript
import { Client } from "pubg.ts";

const client = new Client({
  apiKey: "...",
});

// Using a player name
const { data, error } = await getPlayer({
  value: "YOUR_NAME_HERE",
});

// Using a player ID
const { data, error } = await getPlayer({
  id: true,
  value: "account.ABC123",
});
```

</details>

## ❤️ Credits

- [ickerio](https://github.com/ickerio): This project was heavily inspired by [pubg.js](https://github.com/ickerio/pubg.js)
