/* eslint-disable max-len */
import getElementFromComponent from './getElementFromComponent';

// Get element references.
const elements = {
  mockOne: {
    alignleft: document.querySelector('.mock-one__alignleft___1cXIA'),
    title: document.querySelectorAll('.mock-one__title___2kGA7._typography__header-main___2IME8'),
  },
  mockTwo: {
    alignleft: document.querySelector('.mock-two__alignleft___Lww3s'),
    shared: document.querySelectorAll('.mock-two__shared-name___Kf9x0'),
    sharedFirst: document.querySelector('.mock-two__shared-name___Kf9x0'),
    title: document.querySelector('.mock-one__title___2kGA7'),
  },
};

describe('Test getting elements from a component', () => {
  test('Get an element from a component', () => {
    const mockOneAlignLeft = getElementFromComponent('alignleft', 'mock-one');
    expect(mockOneAlignLeft).toEqual(elements.mockOne.alignleft);
    expect(mockOneAlignLeft).not.toEqual(elements.mockTwo.alignleft);

    const mockTwoAlignLeft = getElementFromComponent('alignleft', 'mock-two');
    expect(mockTwoAlignLeft).toEqual(elements.mockTwo.alignleft);

    const firstShared = getElementFromComponent('shared-name', 'mock-two');
    expect(firstShared).toEqual(elements.mockTwo.sharedFirst);
  });

  test('Get all elements from a component', () => {
    const allShared = getElementFromComponent('shared-name', 'mock-two', true);
    expect(allShared).toEqual(elements.mockTwo.shared);
    expect(allShared).toBeInstanceOf(NodeList);

    const mockOneTitle = getElementFromComponent('title', 'mock-one', true);
    expect(mockOneTitle).toBeInstanceOf(NodeList);
    expect(mockOneTitle).toEqual(elements.mockOne.title);
  });
});

describe('Should return null for nonexistent elements and components', () => {
  test('Fail to retrieve nonexistent element', () => {
    const nonExistentComponent = getElementFromComponent('fakename', 'non-existent-mock');
    expect(nonExistentComponent).toBeNull();

    const nonExistentElement = getElementFromComponent('title', 'mock-two');
    expect(nonExistentElement).toBeNull();
  });

  test('Fail to get element from nonexistent component', () => {
    const notFound = getElementFromComponent('fakename', 'non-existent-mock', true);
    expect(notFound).toBeNull();
    expect(notFound).not.toBeInstanceOf(NodeList);
  });
});
