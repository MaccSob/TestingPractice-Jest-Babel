const reverseString = require('./reverseString');

test('String should be reversed', () => {
  expect(reverseString('food')).toBe("doof");
});