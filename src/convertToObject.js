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
  const splittedBySemicolon = sourceString.split(';');
  const resultArr = [];

  const trimmedArr = splittedBySemicolon.map(string => string.trim());

  for (const string of trimmedArr) {
    if (string === '') {
      continue;
    }

    const propertyArr = string.split(':');

    propertyArr[0] = propertyArr[0].trim();
    propertyArr[1] = propertyArr[1].trim();
    resultArr.push(propertyArr);
  }

  const result = Object.fromEntries(resultArr);

  return result;
}

module.exports = convertToObject;
