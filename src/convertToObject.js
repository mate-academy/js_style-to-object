'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keyValuePairs = sourceString
    .split(';')
    .map(item => item.split(':'));
  const resultObject = {};

  keyValuePairs.forEach(pair => {
    if (pair.length !== 2) {
      return;
    }

    const currKey = pair[0].trim();
    const value = pair[1].trim();

    resultObject[currKey] = value;
  });

  return resultObject;
}

module.exports = convertToObject;
