import getSelectorFromComponent from './getSelectorFromComponent';

/**
 * Get an element or NodeList from another component.
 *
 * @param {string}  className The unhashed classname to use as the selector.
 * @param {string}  component The component from which to retrieve the classname.
 * @param {boolean} all       Return a NodeList
 *
 * @return {HTMLElement|NodeList}
 */
export default function getElementFromComponent(className, component, all = false) { // eslint-disable-line max-len
  const componentSelector = getSelectorFromComponent(className, component);

  // Return `null` for empty selectors to mimick DOM selection APIs.
  if ('' === componentSelector) {
    return null;
  }

  const query = all ? 'querySelectorAll' : 'querySelector';
  return document[query](componentSelector);
}
