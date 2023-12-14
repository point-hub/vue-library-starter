# Quickstart

## Installation

Install the component using the preferred package manager

```sh
bun add @point-hub/vue-library-starter
```

Update your main.ts

```ts
import '@point-hub/vue-library-starter/style.css'
import { PluginVueLibraryStarter } from '@point-hub/vue-library-starter'

const app = createApp(App)
app.use(PluginVueLibraryStarter)
```

## Usage

In the `.vue` files

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/vue-library-starter'
</script>

<template>
  <component :is="BaseButton">Button</component>
</template>
```
