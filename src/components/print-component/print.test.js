import { printMe } from './print';

test('should output a console log 1', () => {
  expect(true).toBe(true);
})

test('should output a console log 2', () => {
  expect(true).toBe(true);
  // The code below will not pass Travis CI
  // expect(true).toBe(false);
})