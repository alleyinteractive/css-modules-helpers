/**
 * Get a component's classnames object from `window.cssModulesClassnames`.
 *
 * @param {string} component The component from which to retrieve the classnames.
 * @return {object} The component's classnames, or false if not found.
 */
export default function getComponentClassnames(component) {
  const { cssModulesClassnames } = window;
  /*
   * Verify the CSS Modules classnames mapping exists on the window element and
   * that the component property exists. If either of these conditions is falsy,
   * there is an issue with the CSS Modules configuration or the component
   * doesn't exist.
   */
  if (
    undefined === cssModulesClassnames
    || ! Object.prototype.hasOwnProperty.call(cssModulesClassnames, component)
  ) {
    return {};
  }

  return cssModulesClassnames[component];
}
