<script setup lang="ts">
  import { Client } from "../../src";

  const client = new Client({
    apiKey: "ABC",
  });

  const player = await client.getPlayer({
    name: "ElonMusk",
    type: "name",
  });
  console.log("player", player);
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
