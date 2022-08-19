'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitStyles = sourceString.split(';');
  const stylesWithoutEmptyLines = splitStyles.filter(style => style.trim());
  const separateEntries = stylesWithoutEmptyLines
    .map(style => style.split(':'));
  const trimmedStyles = separateEntries.map(style => style
    .map(styleEntrie => styleEntrie.trim()));

  const result = Object.fromEntries(trimmedStyles);

  return result;
}

module.exports = convertToObject;
