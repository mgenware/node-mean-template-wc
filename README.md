# node-mean-template

Node.js/TypeScript boilerplate project

- Uses TypeScript 3 project references
- Commands for development, testing, linting, clean and build

## Usage

- Make sure yarn is installed
- Clone this project
- Set a valid project name in `package.json`
- Run `sh init.sh` to install the latest dependencies (**Windows users: you may have to manually run the stuff in `init.sh`**)

## Folder structure

|              | Description                                | Uploaded to Git | Uploaded to npm |
| ------------ | ------------------------------------------ | --------------- | --------------- |
| `src`        | TypeScript source files                    | ✅              | ❌              |
| `tests`      | TypeScript tests files                     | ✅              | ❌              |
| `dist`       | Compiled JavaScript, type definition files | ❌              | ✅              |
| `dist_tests` | Compiled JavaScript tests files            | ❌              | ❌              |

## Scripts

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts through daizong via `yarn r <script>` or `npm run r <script>`.

### For development

- `yarn r dev` starts the development mode, which watches and compiles all source files including tests files.
- `yarn r t` runs tests in development mode. You can keep two terminal tabs during development, one for `yarn dev`, the other for `yarn r t`.

### For production

- `yarn r build` cleans, lints, compiles the project and runs tests.

### Other scripts

Usually, you do not need to manually run these scripts, they are already integrated into other scripts.

- `yarn r lint` lints the project using ESLint, auto triggered by `yarn r build`.
- `yarn r clean` deletes compiled files, auto triggered by `yarn r dev` or `yarn r build`.

### No `prepublishOnly`

The `prepublishOnly` script was removed, we recommend using [np](https://github.com/sindresorhus/np) to publish packages, which will automatically run `yarn test` before publishing.
