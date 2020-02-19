import kebabToCamelCase from './kebabToCamelCase';

describe('camelCase a kebab-case string', () => {
  test.each([
    ['mock-one', 'mockOne'],
    ['menu-item-link', 'menuItemLink'],
  ])(
    'camelCases `%s` as `%s`',
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
    'Ignores `%s`',
    (componentName) => {
      expect(kebabToCamelCase(componentName)).toEqual(componentName);
    }
  );
});
