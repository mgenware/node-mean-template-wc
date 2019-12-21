# node-mean-template

Node.js/TypeScript boilerplate project

- Uses TypeScript 3 project references
- Commands for development, testing, linting, clean and build

## Usage

- Make sure yarn is installed
- Clone this project
- Set a valid project name in `package.json`
- Run `sh init.sh` to install the latest dependencies (**Windows users: you may have to manually run the stuff in `init.sh`**)

## Folder Structure

|              | Description                                | Uploaded to Git | Uploaded to npm |
| ------------ | ------------------------------------------ | --------------- | --------------- |
| `src`        | TypeScript source files                    | ✅              | ❌              |
| `tests`      | TypeScript tests files                     | ✅              | ❌              |
| `dist`       | Compiled JavaScript, type definition files | ❌              | ✅              |
| `dist_tests` | Compiled JavaScript tests files            | ❌              | ❌              |

## Commands

### For development

- `yarn dev` starts the development mode, which watches and compiles all source files including tests files.
- `yarn t` runs tests in development mode. You can keep two terminal tabs during development, one for `yarn dev`, the other for `yarn t`.

### For production

- `yarn test` (or `yarn build`) cleans, lints, compiles sources and runs tests.

### Other Commands

Usually, you do not need to manually run these commands, they are already integrated into other commands.

- `yarn lint` lints the project using ESLint, auto triggered by `yarn test`.
- `yarn clean` removes the compiled files, auto triggered by `yarn dev` or `yarn test`.
- `yarn compile` compiles all TypeScript source files, auto triggered by `yarn test`.
