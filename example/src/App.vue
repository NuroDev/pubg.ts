<script setup lang="ts">
  import { SearchIcon } from "@heroicons/vue/outline";

  import GitHubButton from "./components/GitHubButton.vue";
  import ThemeButton from "./components/ThemeButton.vue";

  // import {
  //   useMatch,
  //   usePlayer,
  //   useSeason,
  //   useSeasons,
  //   useStatus,
  // } from "../../src";

  // const apiKey = import.meta.env.VITE_PUBG_API_KEY;

  // const [player, match, seasons, currentSeason, status] = await Promise.all([
  //   usePlayer({ apiKey, value: import.meta.env.VITE_PUBG_PLAYER_NAME }),
  //   useMatch({ apiKey, id: import.meta.env.VITE_PUBG_MATCH_ID }),
  //   useSeasons({ apiKey }),
  //   useSeason({ apiKey }),
  //   useStatus({ apiKey }),
  // ]);

  // console.log("player", player);
  // console.log("match", match);
  // console.log("seasons", seasons);
  // console.log("currentSeason", currentSeason);
  // console.log("status", status);
</script>

<template>
  <ThemeButton />
  <GitHubButton />
  <div
    class="
      min-h-screen
      bg-gray-50
      dark:bg-gray-900
      flex flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
    "
  >
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
      <div class="bg-gray-50 shadow sm:rounded-lg">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div
                class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="email"
                id="email"
                class="
                  bg-gray-50
                  dark:bg-gray-800
                  appearance-none
                  block
                  w-full
                  px-4
                  py-3
                  pl-10
                  border-2 border-gray-200
                  dark:border-gray-700
                  rounded-md
                  shadow
                  focus:outline-none
                  focus:ring-4
                  focus:ring-blue-500
                  focus:border-blue-500
                  sm:text-sm
                  transition
                  ease-in-out
                  duration-300
                "
                placeholder="PlayerUnknown"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
