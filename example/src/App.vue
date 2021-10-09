<script setup lang="ts">
  import {
    CodeIcon,
    MoonIcon,
    SearchIcon,
    SunIcon,
  } from "@heroicons/vue/outline";
  import { onMounted } from "vue";
  import { useDark, useToggle } from "@vueuse/core";

  import {} from "../../src";
  import Button from "./components/Button.vue";

  const isDark = useDark();
  const toggleTheme = useToggle(isDark);
</script>

<template>
  <Button aria-label="Toggle Theme" @click="toggleTheme">
    <MoonIcon class="icon" v-if="isDark" />
    <SunIcon class="icon" v-else />
  </Button>
  <Button position="right" aria-label="GitHub" @click="toggleTheme">
    <CodeIcon class="icon" />
  </Button>
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
                  rounded-lg
                  shadow
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-500
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

<style lang="postcss" scoped>
  .icon {
    @apply w-6 h-6;
  }
</style>

<style lang="postcss">
  html.dark {
    * {
      --tw-ring-offset-color: #0c0e10;
    }
  }
</style>
