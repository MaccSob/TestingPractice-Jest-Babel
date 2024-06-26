const capitalize = require('./capitalize');

test('First letter should be capital', () => {
  expect(capitalize('papież')).toBe("Papież");
});