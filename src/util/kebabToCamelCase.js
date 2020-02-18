/**
 * CamelCase a string.
 *
 * @param {String} input The string to camelCase.
 *
 * @return {String} The input, camelCased.
 */
export default function kebabToCamelCase(input) {
  if ('string' !== typeof input) {
    return input;
  }

  const camelCase = input.split('-').map((word, i) => {
    if (0 === i) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');

  return camelCase;
}
