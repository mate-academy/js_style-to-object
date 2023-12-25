'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const resultObject = {};

  const cssProperties = sourceString.split(';').map((string) => {
    return string.split(':').map(cssProp => {
      return cssProp.trim();
    });
  });

  for (const prop of cssProperties) {
    if (prop.length === 2) {
      resultObject[prop[0]] = prop[1];
    }
  }

  return resultObject;
}

module.exports = convertToObject;
