import kebabToCamelCase from './kebabToCamelCase';

describe('camelCase a kebab-case string', () => {
  test.each([
    ['mock-one', 'mockOne'],
    ['menu-item-link', 'menuItemLink'],
  ])(
    'Gets the `%s` classname from `%s`',
    (componentName, expected) => {
      expect(kebabToCamelCase(componentName)).toEqual(expected);
    }
  );
});

describe('Ignore non-kebab-case strings', () => {
  test.each([
    ['mockThree'],
    ['fooBar'],
    ['alignleft'],
  ])(
    'The `%s` classname does not exist in `%s`',
    (componentName) => {
      expect(kebabToCamelCase(componentName)).toEqual(componentName);
    }
  );
});
