'use strict';

/**
 * Implement convertToObject function:
 *
 *Function takes a string with styles ([stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * the values of related CSS properties ([test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString.split(';')
    .map(a => a.trim())
    .filter(a => a.length > 1)
    .map(a => a.split(':'));

  return newArr.reduce((object, currentValue) => {
    object[currentValue[0].trim()] = currentValue[1].trim();

    return object;
  }, {});
}

module.exports = convertToObject;
