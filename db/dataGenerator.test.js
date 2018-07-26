const menus = require('./dataGenerator.js').menus;

test('menus should be an array', () => {
  expect(Array.isArray(menus)).toBe(true);
});

test('menus should be have 100 elements', () => {
  expect(menus.length).toBe(100);
});

test('the elements of the menus array should be objects', () => {
  expect(typeof menus[0]).toBe('object');
});
