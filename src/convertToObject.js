'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringToArray = sourceString.trim().split(';');
  const resObj = {};

  stringToArray.forEach(element => {
    const keyAndValueInObj = element.split(':');
    const keyInObj = keyAndValueInObj[0]
      ? keyAndValueInObj[0].trim() : keyAndValueInObj[0];
    const valueInObj = keyAndValueInObj[1]
      ? keyAndValueInObj[1].trim() : keyAndValueInObj[1];

    if (keyInObj && valueInObj) {
      resObj[keyInObj] = valueInObj;
    }
  });

  return resObj;
}
module.exports = convertToObject;
