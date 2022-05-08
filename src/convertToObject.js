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

  stylesArray.forEach((element) => {
    const currentKeyValue = element.split(':');

    if (currentKeyValue[1]) {
      stylesObject[currentKeyValue[0].trim()] = currentKeyValue[1].trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
