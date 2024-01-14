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
  const cssObject = {};
  const propertiesArray = sourceString.split(';');

  propertiesArray.map(element => {
    const splitElement = element.split(':')
      .map(item => item.trim());

    if (splitElement.length >= 2) {
      cssObject[splitElement[0]] = splitElement[1];
    }
  });

  return cssObject;
}

module.exports = convertToObject;
