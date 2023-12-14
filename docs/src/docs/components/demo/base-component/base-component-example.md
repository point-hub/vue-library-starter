Base component example

::: raw

<ClientOnly>
  <BaseComponentExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseComponent } from '@point-hub/vue-library-starter'
</script>

<template>
  <BaseComponent
    title="Hello World"
    description="Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  />
</template>
```

:::
