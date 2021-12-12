export default {
  // Starts development mode: watches and compiles all source files including tests.
  dev: {
    run: ['#clean', 'tsc -b tests -w'],
    envGroups: ['development'],
  },

  // Opens example page in browser.
  serve: {
    run: ['web-dev-server --open example/ --node-resolve --watch'],
  },

  // Cleans, lints, compiles sources and runs tests.
  build: {
    run: ['#clean', 'tsc -b tests', '#lint', '#t'],
    envGroups: ['production'],
  },

  // Deletes compiled files, auto triggered by `#dev` or `#build`.
  clean: {
    run: {
      del: ['dist', 'dist_tests'],
    },
  },

  // Lints the project using ESLint, auto triggered by `#build`.
  lint: {
    run: 'eslint --max-warnings 0 --ext .ts src/ tests/',
  },

  // Runs tests when you already have `#dev` running.
  t: {
    run: 'web-test-runner dist_tests/**/*.test.js --node-resolve',
  },

  // Runs tests in watch mode when you already have `#dev` running.
  tw: {
    run: 'web-test-runner dist_tests/**/*.test.js --node-resolve --watch',
  },

  _: {
    envGroups: {
      production: {
        NODE_ENV: 'production',
      },
      development: {
        NODE_ENV: 'development',
      },
    },
  },
};
