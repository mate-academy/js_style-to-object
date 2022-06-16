'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssClasses = sourceString.split(';')
    .map(property => property.split(':')
      .filter(existingProp => existingProp.length > 1)
      .map(correctProp => correctProp.trim()))
    .filter(finalProp => finalProp.length > 1);

  const correctedStyles = Object.fromEntries(cssClasses);

  return correctedStyles;
}

module.exports = convertToObject;
