'use strict';

const stylesString = require('./stylesString');

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
  const resultObject = {};
  const arrayFromString = sourceString.split(';');

  arrayFromString.forEach((element) => {
    const [key, value] = element.split(':');

    if (value) {
      resultObject[key.trim()] = value.trim();
    }
  });

  return resultObject;
}

convertToObject(stylesString);

module.exports = convertToObject;
