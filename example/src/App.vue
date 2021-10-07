<script setup lang="ts">
  import { useMatch, usePlayer, useSeason, useSeasons } from "../../src";

  const apiKey = import.meta.env.VITE_PUBG_API_KEY;

  const player = await usePlayer({
    apiKey,
    value: import.meta.env.VITE_PUBG_PLAYER_NAME,
  });
  console.log("player", player);

  const match = await useMatch({
    apiKey,
    id: import.meta.env.VITE_PUBG_MATCH_ID,
  });
  console.log("match", match);

  const seasons = await useSeasons({
    apiKey,
  });
  console.log("seasons", seasons);

  const currentSeason = await useSeason({
    apiKey,
  });
  console.log("currentSeason", currentSeason);
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
