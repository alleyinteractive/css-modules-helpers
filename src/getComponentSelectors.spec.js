/* eslint-disable max-len */
import getComponentSelectors from './getComponentSelectors';

describe('Get the formatted classnames for a component', () => {
  test.each([
    ['mock-one', {
      alignleft: '.mock-one__alignleft___1cXIA',
      alignright: '.mock-one__alignright___18ifD',
      title: '.mock-one__title___2kGA7 _typography__header-main___2IME8',
      articleBody: '.mock-one__article-body___RnJE3',
    }],
    ['mock-two', {
      alignleft: '.mock-two__alignleft___Lww3s',
      alignright: '.mock-two__alignright___33Y6O',
      sharedName: '.mock-two__shared-name___Kf9x0',
    }],
  ])(
    'Gets formatted classnames for %s',
    (componentName, expected) => {
      expect(getComponentSelectors(componentName)).toEqual(expected);
    }
  );
});

test('Fail for nonexistent components or missing argument', () => {
  expect(getComponentSelectors('mockThree')).toEqual({});
  expect(getComponentSelectors()).toEqual({});
});
