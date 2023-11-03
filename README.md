# Vue Library Starter

This template should help get you started developing component library with Vue 3 in Vite.

## Quickstart

Install the component

```sh
bun add @point-hub/vue-library-starter
```

Import css in your `main.ts`

```ts
import '@point-hub/vue-library-starter/style.css'
```

Use the component

```vue
<script setup lang="ts">
import { BaseComponent } from '@point-hub/vue-library-starter'
</script>

<template>
  <div>
    <component
      :is="BaseComponent"
      title="Hello World"
      description="Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit."
    ></component>
  </div>
</template>
```

## Project Setup

Install bun globally

```sh
npm install -g bun
```

Install dependencies

```sh
bun install --frozen-lock
```

Start development server

```sh
bun run dev
```

Build and emit types

```sh
bun run build
```

Run test with [Vitest](https://vitest.dev/)

```sh
bun run test:unit
```

Run lint with [ESLint](https://eslint.org/)

```sh
bun run lint
```

## Publish Package

Update version in `package.json` before publish your package. please follow [Semantic Versioning](https://semver.org)

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backward compatible manner
- PATCH version when you make backward compatible bug fixes

```
{
  "name": "@point-hub/vue-library-starter",
  "version": "1.0.1",
}
```

Publish to NPM registry

```sh
npm publish --access public
```
