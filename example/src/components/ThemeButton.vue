<template>
  <div class="container">
    <button class="button" aria-label="Toggle Theme" @click="toggleTheme">
      <MoonIcon class="icon" v-if="isDark" />
      <SunIcon class="icon" v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { MoonIcon, SunIcon } from "@heroicons/vue/outline";
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark();
  const toggleTheme = useToggle(isDark);
</script>

<style lang="postcss" scoped>
  .container {
    @apply fixed top-0 left-0 w-12 m-8 z-10;
  }

  .button {
    @apply flex justify-center items-center \
      w-12 h-12 \
      p-2 \
      rounded-lg \
      text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 \
      bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 \
      transition ease-in-out duration-300 \
      focus:outline-none focus:ring-4 focus:ring-blue-500;
  }

  .icon {
    @apply w-6 h-6;
  }
</style>
