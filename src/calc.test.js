// calc test
const calc = require('./calc');
test('double 2 to equal 4', () => {
  expect(calc.double(2)).toBe(4);
});