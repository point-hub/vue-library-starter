<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="base-component-container">
    <h5 class="base-component-title">
      {{ title }}
    </h5>
    <p class="base-component-description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.base-component-container {
  @apply block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700;
}

.base-component-title {
  @apply mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white;
}

.base-component-description {
  @apply font-normal text-gray-700 dark:text-gray-400;
}
</style>
