'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfCssValue = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  const resultListOfCssPropertes = {};

  for (const ch of arrayOfCssValue) {
    const cssProperties = ch.split(':');

    resultListOfCssPropertes[cssProperties[0].trim()] = cssProperties[1].trim();
  }

  return resultListOfCssPropertes;
}

module.exports = convertToObject;
