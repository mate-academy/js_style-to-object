'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cascadingStyleSheets = {};
  const stringConverted = sourceString.split(';');
  const splittedByDoubledots = stringConverted.map(style => style.split(':'));
  const filtered = splittedByDoubledots.filter(style => style.length === 2);
  const deletedGaps = filtered.map(
    ([key, value]) => [key.trim(), value.trim()]
  );

  for (const style of deletedGaps) {
    cascadingStyleSheets[style[0]] = style[1];
  }

  return cascadingStyleSheets;
}

module.exports = convertToObject;
