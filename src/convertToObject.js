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
  const stylesObject = {};
  const rulesForCss = sourceString.split(';');

  rulesForCss.forEach(rule => {
    const [key, value] = rule.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      stylesObject[trimmedKey] = trimmedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
