<template>
  <div
    :class="['container', position === Position.LEFT ? 'left-0' : 'right-0']"
  >
    <button class="button">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
  enum Position {
    LEFT = "left",
    RIGHT = "right",
  }

  const { position = Position.LEFT } = defineProps<{
    position?: Position;
  }>();
</script>

<style lang="postcss" scoped>
  .container {
    @apply fixed top-0 w-12 m-8 z-10;
  }

  .button {
    @apply flex justify-center items-center \
      w-12 h-12 \
      p-2 \
      rounded-lg \
      text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 \
      bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 \
      transition ease-in-out duration-300 \
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
  }
</style>
