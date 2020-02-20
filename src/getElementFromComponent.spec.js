/* eslint-disable max-len */
import getElementFromComponent from './getElementFromComponent';

// Get element references.
const elements = {
  mockOne: {
    alignleft: document.querySelector('.mock-one__alignleft___1cXIA'),
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

    const mockTwoTitle = getElementFromComponent('title', 'mock-two');
    expect(mockTwoTitle).toBeNull();

    const firstShared = getElementFromComponent('shared-name', 'mock-two');
    expect(firstShared).toEqual(elements.mockTwo.sharedFirst);
  });

  test('Get all elements from a component', () => {
    const allShared = getElementFromComponent('shared-name', 'mock-two', true);
    expect(allShared).toEqual(elements.mockTwo.shared);
    expect(allShared).toBeInstanceOf(NodeList);

    const mockOneTitle = getElementFromComponent('title', 'mock-one', true);
    expect(mockOneTitle).toBeInstanceOf(NodeList);
    expect(mockOneTitle[0]).toEqual(elements.mockOne.title);
  });
});
