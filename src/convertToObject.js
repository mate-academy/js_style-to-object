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
  const keyAndValueArray
  = sourceString.split(';')
    .map(item => item.trim())
    .filter(Boolean);

  const convertedObject
  = Object.fromEntries(keyAndValueArray
    .map(element => element.split(':')
      .map(item => item.trim())
    ));

  return convertedObject;
}

module.exports = convertToObject;
