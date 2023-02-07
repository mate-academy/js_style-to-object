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
  const newArr = sourceString.split(';');

  return newArr.reduce((object, value) => {
    if (value.split(':')[0].trim().length > 1) {
      object[value.split(':')[0].trim()] = value.split(':')[1].trim();
    }

    return object;
  }, {});
}

module.exports = convertToObject;
