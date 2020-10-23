// calc test
const calc = require('./calc');
test('double 2 to equal 4', () => {
  expect(calc.double(2)).toBe(4);
});
test('tripe 2 to equal 6', () => {
  expect(calc.triple(2)).toBe(6);
});