# node-boilerplate

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://img.shields.io/travis/mgenware/layit.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/layit)
[![npm version](https://img.shields.io/npm/v/layit.svg?style=flat-square)](https://npmjs.com/package/layit)
[![Node.js Version](http://img.shields.io/node/v/layit.svg?style=flat-square)](https://nodejs.org/en/)

TypeScript Node.js modules boilerplate. (The badges above are for demonstration purposes only). 
* Uses TypeScript 3 project references.
* **Windows is not currently supported**.

## Getting started

* Make sure yarn is installed
* Clone this project
* Set a valid project name in `package.json`
* Run `sh init.sh` to install the latest dependencies

## Usage

### Common scripts
* `yarn dev` starts the development mode, which watches and compiles all source files including tests files.
* `yarn t` run tests in development mode. usually, you keep two terminal tabs, one with `yarn dev`, the other with `yarn t`.
* `yarn test` or `yarn build` cleans, lints and run tests.

## Folder Structure

|              | Description                                | Uploaded to Git | Uploaded to npm |   |   |
|--------------|--------------------------------------------|-----------------|-----------------|---|---|
| `lib`        | TypeScript source files                    | ✅               | ❌               |   |   |
| `tests`      | TypeScript tests files                     | ✅               | ❌               |   |   |
| `dist`       | Compiled JavaScript, type definition files | ❌               | ✅               |   |   |
| `dist_tests` | Compiled JavaScript tests files            | ❌               | ❌               |   |   |
