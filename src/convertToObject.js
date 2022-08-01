'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStrings = sourceString.split(';');
  const resultObject = {};

  arrayOfStrings.forEach(style => {
    const styleArray = style.split(':');

    if (styleArray.length === 2) {
      resultObject[styleArray[0].trim()] = styleArray[1].trim();
    }
  });

  return resultObject;
}

module.exports = convertToObject;
