const main = require('..');

test('test add', () => {
  expect(main.add(1, -9)).toBe(-8);
});
