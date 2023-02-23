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
  return sourceString
    .split(';')
    .filter(styleRules => styleRules.trim())
    .reduce((acc, styleRule) => {
      const [property, value] = styleRule.split(':');

      const cleanProperty = property.trim();
      const cleanValue = value.trim();

      acc[cleanProperty] = cleanValue;

      return acc;
    }, {});
}

module.exports = convertToObject;
