import getComponentClassnames from './getComponentClassnames';
import getChainedSelector from './util/getChainedSelector';

/**
 * Get all of a given component's hashed classnames formatted as DOM selectors.
 *
 * @param {string} component The component for which to format the classnames.
 * @return {object}
 */
export default function getComponentSelectors(component) {
  const componentClasses = getComponentClassnames(component);

  // `getComponentClassnames` returns an object.
  return Object.keys(componentClasses).reduce((acc, key) => {
    acc[key] = getChainedSelector(componentClasses[key]);
    return acc;
  }, {});
}
