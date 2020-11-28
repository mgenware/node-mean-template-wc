import * as assert from 'assert';
import { add } from '..';

it('Add', () => {
  assert.strictEqual(add(1, -9), -8);
});
