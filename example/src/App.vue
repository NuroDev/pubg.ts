<script setup lang="ts">
  import {
    CodeIcon,
    MoonIcon,
    SearchIcon,
    SunIcon,
  } from "@heroicons/vue/outline";
  import { onMounted } from "vue";
  import { useDark, useToggle } from "@vueuse/core";

  import { useTournament } from "../../src";
  import Button from "./components/Button.vue";

  const isDark = useDark();
  const toggleTheme = useToggle(isDark);

  // const apiKey = import.meta.env.VITE_PUBG_API_KEY;
  // onMounted(async () => {
  //   const tournament = await useTournament({
  //     apiKey,
  //   });
  //   console.log("tournament", tournament);
  // });
</script>

<template>
  <main>
    <Button aria-label="Toggle Theme" @click="toggleTheme">
      <MoonIcon class="icon" v-if="isDark" />
      <SunIcon class="icon" v-else />
    </Button>
    <Button position="right" aria-label="GitHub" @click="toggleTheme">
      <CodeIcon class="icon" />
    </Button>
    <div class="content">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex justify-center items-center">
          <span class="mx-auto text-6xl">🐔</span>
        </div>
        <h2
          class="
            mt-6
            text-center text-6xl
            font-extrabold
            text-gray-800
            dark:text-white
          "
        >
          pubg.ts
        </h2>
        <p class="mt-6 text-center text-md text-gray-600 dark:text-gray-400">
          A lightweight PUBG TypeScript API
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="search">
          <div class="searchInput">
            <input
              id="search"
              name="search"
              placeholder="Player Unknown"
              type="text"
            />
          </div>

          <button type="button">
            <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  .icon {
    @apply w-6 h-6;
  }

  .content {
    @apply min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 \
        bg-gray-50 dark:bg-gray-900;
  }

  .search {
    @apply mt-1 flex rounded-md shadow-sm;

    .searchInput {
      @apply relative flex items-stretch flex-grow focus-within:z-10;

      input {
        @apply block w-full px-4 py-3 \
          bg-gray-50 dark:bg-gray-800 \
            appearance-none rounded-lg rounded-r-none shadow \
            border-2 border-gray-200 dark:border-gray-700 \
            sm:text-sm \
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transition ease-in-out duration-300;
      }
    }

    button {
      @apply relative inline-flex items-center space-x-2 \
        -ml-px px-4 py-2 \
        border-2 border-l-0 border-gray-200 dark:border-gray-700 \
        text-sm font-medium text-gray-700 dark:text-gray-400 \
        rounded-r-md shadow \
        bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 \
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 \
        transition ease-in-out duration-300;
    }
  }
</style>

<style lang="postcss">
  html.dark {
    * {
      --tw-ring-offset-color: #0c0e10;
    }
  }
</style>
