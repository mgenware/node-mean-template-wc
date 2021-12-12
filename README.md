# node-mean-template-wc

Node.js TypeScript boilerplate for **Web components**. For standard node projects, see [node-mean-template](https://github.com/mgenware/node-mean-template)

- Node v14+
- **ES modules**
- Uses TypeScript 3 project references
- Commands for development, testing, linting, clean and build
- Powered by [modern web tools](https://github.com/modernweb-dev/web)

## Folder structure

|              | Description                                | Uploaded to Git | Uploaded to npm |
| ------------ | ------------------------------------------ | --------------- | --------------- |
| `src`        | TypeScript source files                    | ✅              | ❌              |
| `tests`      | TypeScript tests files                     | ✅              | ❌              |
| `dist`       | Compiled JavaScript, type definition files | ❌              | ✅              |
| `dist_tests` | Compiled JavaScript tests files            | ❌              | ❌              |
| `example`    | Example                                    | ✅              | ❌              |

## Build Instructions

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts through daizong via `npm run r <script>` or `yarn r <script>`.

### For development

- `npm run r dev` starts the development mode, which watches and compiles all source files including tests files.
- `npm run r serve` opens example page in browser.
- `npm run r t` runs tests in development mode.
- `npm run r tw` runs tests in development and watches test files.

> Tip: You can keep 3 terminal tabs open to run the 3 scripts above during development.

### For production

- `npm run r build` cleans, lints, compiles the project and runs tests.

### Other scripts

You do not need to manually run these scripts, they are already integrated into other scripts.

- `npm run r lint` lints the project using ESLint, auto triggered by `#build`.
- `npm run r clean` deletes all build artifacts, auto triggered by `# dev` or `#build`.

### No `prepublishOnly`

The `prepublishOnly` script was removed, we recommend using [np](https://github.com/sindresorhus/np) to publish packages, which will automatically run `npm test`, which runs `npm run r build` before publishing.

### Badges

Please replace `__PKG_NAME__` with your package name:

```
[![Build Status](https://github.com/mgenware/__PKG_NAME__/workflows/Build/badge.svg)](https://github.com/mgenware/__PKG_NAME__/actions)
[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/__PKG_NAME__)
[![npm version](https://img.shields.io/npm/v/__PKG_NAME__.svg?style=flat-square)](https://npmjs.com/package/__PKG_NAME__)
[![Node.js Version](http://img.shields.io/node/v/__PKG_NAME__.svg?style=flat-square)](https://nodejs.org/en/)
```
