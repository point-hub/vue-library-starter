---
outline: deep
---

# Example

## Create Component

`components/base-component.vue`

```
<script setup lang="ts">
</script>

<template>
  <div class="example-class">
    Component Example
  </div>
</template>

<style scoped>
.example-class {
  @apply m-4 p-4 bg-red-500
}
</style>
```

## Export Component

`index.ts`

```
export { default as BaseComponent } from '@/components/base-component.vue'
```
