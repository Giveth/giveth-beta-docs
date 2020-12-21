# docs.beta.giveth.io
[![Action Status](https://github.com/giveth/giveth-beta-docs/workflows/deploy-docs/badge.svg)](https://github.com/giveth/giveth-beta-docs/actions)

**Attention!** Giveth maintains two very different versions of a donation application:

https://beta.giveth.io (Internal release, predates version2)
https://giveth.io (Version2 of the donatin applications)

**BOTH DAPPS** have **dedicated documentation**.

Visit the [Giveth Beta Docs](https://docs.beta.giveth.io/)

*This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.*

---


## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
