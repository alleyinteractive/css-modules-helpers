import getComponentClassnames from './getComponentClassnames';
import kebabToCamelCase from './util/kebabToCamelCase';
import getChainedSelector from './util/getChainedSelector';

/**
 * Get a hashed classname selector from a component.
 *
 * @param {string} className The un-hashed classname.
 * @param {string} component The component from which to retrieve the classname.
 * @return {string} The formatted, hashed classname.
 */
export default function getSelectorFromComponent(className, component) {
  const componentClassnames = getComponentClassnames(component);
  const camelCaseClassName = kebabToCamelCase(className);

  // Validate the output from `getComponentClassnames`.
  if (
    0 === Object.keys(componentClassnames).length
    || undefined === componentClassnames[camelCaseClassName]
  ) {
    return '';
  }

  return getChainedSelector(componentClassnames[camelCaseClassName]);
}
