/* eslint-disable max-len */
import getChainedSelector from './getChainedSelector';

describe('Merges a string of classnames and formats them as a compound selector', () => {
  test.each([
    ['selector-one selector-two', '.selector-one.selector-two'],
    ['selector-one selector-two menu-item-link', '.selector-one.selector-two.menu-item-link'],
    ['menu-item-link', '.menu-item-link'],
  ])(
    'Merges `%s` as `%s`',
    (componentName, expected) => {
      expect(getChainedSelector(componentName)).toEqual(expected);
    }
  );
});
