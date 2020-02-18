/* eslint-disable max-len */
import getComponentClassnames from './getComponentClassnames';

describe('Get a hashed classname from a component', () => {
  test.each([
    [
      'mock-one',
      {
        alignleft: 'mock-one__alignleft___1cXIA',
        alignright: 'mock-one__alignright___18ifD',
        title: 'mock-one__title___2kGA7 _typography__header-main___2IME8',
        articleBody: 'mock-one__article-body___RnJE3',
      },
    ],
    [
      'mock-two',
      {
        alignleft: 'mock-two__alignleft___Lww3s',
        alignright: 'mock-two__alignright___33Y6O',
        sharedName: 'mock-two__shared-name___Kf9x0',
      },
    ],
  ])(
    'Gets the `%s` classname from `%s`',
    (componentName, expected) => {
      expect(getComponentClassnames(componentName)).toEqual(expected);
    }
  );
});

describe('Fail to find a nonexistent classname', () => {
  test.each([
    ['mock-three'],
    ['foo-bar'],
  ])(
    'The `%s` classname does not exist in `%s`',
    (componentName) => {
      expect(getComponentClassnames(componentName)).toMatchObject({});
    }
  );
});
