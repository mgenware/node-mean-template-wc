const main = require('../..');
import * as assert from 'assert';

describe('require this module', () => {
  it('No exception is thrown', () => {
    assert.doesNotThrow(() => {
      // TODO: call a random method from the main module
    });
  });
});  