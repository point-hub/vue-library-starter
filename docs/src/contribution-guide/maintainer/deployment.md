---
outline: deep
---

# Deployment

::: warning MAINTAINER ONLY
This section of documentation is not necessary for contributor. This guidelines is for maintainer to release new version of this library
:::

## Update version

Update version in `package.json` before publish your package. Please follow [Semantic Versioning](https://semver.org/)

Given a version number `MAJOR`.`MINOR`.`PATCH`, increment the:

- `MAJOR` version when you make incompatible API changes
- `MINOR` version when you add functionality in a backward compatible manner
- `PATCH` version when you make backward compatible bug fixes

## Git Tag & Release

Create Github tag (use the same version in `package.json`)

## Publish to NPM Registry

Publishes a package to the registry so that it can be installed by other apps

```sh
npm publish
```

## Build & Deploy

The container image we build here is to serve documentation website. We are using Github Action, Docker Hub, and Kubernetes to automate this process
