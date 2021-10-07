<script setup lang="ts">
  import {
    useMatch,
    usePlayer,
    useSeason,
    useSeasons,
    useStatus,
  } from "../../src";

  const apiKey = import.meta.env.VITE_PUBG_API_KEY;

  const [player, match, seasons, currentSeason, status] = await Promise.all([
    usePlayer({ apiKey, value: import.meta.env.VITE_PUBG_PLAYER_NAME }),
    useMatch({ apiKey, id: import.meta.env.VITE_PUBG_MATCH_ID }),
    useSeasons({ apiKey }),
    useSeason({ apiKey }),
    useStatus({ apiKey }),
  ]);

  console.log("player", player);
  console.log("match", match);
  console.log("seasons", seasons);
  console.log("currentSeason", currentSeason);
  console.log("status", status);
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Hello World</h1>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .content {
    @apply max-w-3xl mx-auto;
  }
</style>
