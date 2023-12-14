<script setup lang="ts">
withDefaults(
  defineProps<{
    isRow?: boolean
  }>(),
  {
    isRow: false
  }
)
</script>

<template>
  <div class="demo" :class="{ 'demo-col': !isRow, 'demo-row': isRow }">
    <slot></slot>
  </div>
</template>
