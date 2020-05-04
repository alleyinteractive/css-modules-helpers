/**
 * Combine a string of classnames into a chained selector.
 *
 * @param  {string} selectors The selector list.
 * @return {string}           The merged, formatted selectors.
 */
export default function getChainedSelector(selectors) {
return selectors.split(' ')
  .map((classname) => `.${classname}`)
  .join('');
}
