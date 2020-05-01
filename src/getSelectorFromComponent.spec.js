/* eslint-disable max-len */
import getSelectorFromComponent from './getSelectorFromComponent';

describe('Get a hashed class selector from a component', () => {
  test.each([
    ['alignleft', 'mock-one', '.mock-one__alignleft___1cXIA'],
    ['alignleft', 'mock-two', '.mock-two__alignleft___Lww3s'],
    ['title', 'mock-one', '.mock-one__title___2kGA7._typography__header-main___2IME8'],
    ['shared-name', 'mock-two', '.mock-two__shared-name___Kf9x0'],
  ])(
    'Gets the `%s` selector from `%s`',
    (className, componentName, expected) => {
      expect(getSelectorFromComponent(className, componentName)).toEqual(expected);
    }
  );
});

describe('Fail to find a nonexistent classname', () => {
  test.each([
    ['shared-name', 'mock-one'],
    ['elephant', 'mock-two'],
    ['title', 'mock-two'],
    ['Leroy', 'mock-one'],
    [null, null],
  ])(
    'The `%s` classname does not exist in `%s`',
    (className, componentName) => {
      expect(getSelectorFromComponent(className, componentName)).toBeFalsy();
    }
  );
});
