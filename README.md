# Vue Library Starter

This template should help get you started developing component library with Vue 3 in Vite.

## Features

- Type generation using [vue-tsc](https://www.npmjs.com/package/vue-tsc)
- CSS Engine using [Unocss](https://unocss.dev/)
- Linting using [ESLint](https://eslint.org/)
- Formatter using [Prettier](https://prettier.io/)
- Unit testing using [Vitest](https://vitest.dev/)
- `index.ts` is for your library entry point
- `main.ts` is for your development demo entry point

## Usage

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

## Installation

Install bun globally

```sh
npm install -g bun
```

Install dependencies

```sh
bun install --frozen-lock
```

## Commands

```sh
bun run dev # Will run the demos app so you can see your components
bun run build # Will build your components into a library and generate types
bun run lint # Will run lint with eslint
bun run lint:fix # Will autofix lint error
bun run test # Will run unit test with vitest
```

## Todo Checklist

- [ ] Rename `name`, `version` and `repository` field in package.json
- [ ] Rename `module`, `main`, and `exports` fields in package.json (for example "module": "./dist/[my-package].js")
- [ ] Clean up the README

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
