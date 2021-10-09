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
        <div class="bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <div class="mt-1 relative rounded-lg shadow-sm">
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
                  <SearchIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  class="search"
                  placeholder="PlayerUnknown"
                />
              </div>
            </div>
          </form>
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
    @apply block w-full px-4 py-3 pl-10 \
      bg-gray-50 dark:bg-gray-800 \
        appearance-none rounded-lg shadow \
        border-2 border-gray-200 dark:border-gray-700 \
        sm:text-sm \
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition ease-in-out duration-300;
  }
</style>

<style lang="postcss">
  html.dark {
    * {
      --tw-ring-offset-color: #0c0e10;
    }
  }
</style>
