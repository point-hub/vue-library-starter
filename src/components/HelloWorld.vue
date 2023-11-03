<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="container">
    <h1 class="title">{{ msg }}</h1>
    <h3>You’ve successfully call HelloWorld component</h3>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  background-color: slategray;
  color: white;
  padding: 40px;
}

.title {
  color: black;
}
</style>
