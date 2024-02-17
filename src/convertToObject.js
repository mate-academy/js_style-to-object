'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strToArray = sourceString.split(';');
  const createObject = {};

  for (let i = 0; i < strToArray.length; i++) {
    const elements = strToArray[i].split(':');

    if (elements.length === 2) {
      createObject[elements[0].trim()] = elements[1].trim();
    }
  }

  return createObject;
}

module.exports = convertToObject;
