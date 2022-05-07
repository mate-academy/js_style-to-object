'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
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

  const stylesArray = sourceString.split(';');

  for (let i = 0; i < stylesArray.length; i++) {
    const currentKeyValue = stylesArray[i].split(':');

    if (currentKeyValue[1]) {
      stylesObject[currentKeyValue[0].trim()] = currentKeyValue[1].trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
