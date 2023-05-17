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
  const sourceArray = sourceString.split(';');

  const createdObj = {};

  for (let i = 0; i < sourceArray.length; i++) {
    const sourceDesc = sourceArray[i].split(':');

    if (sourceDesc.length === 2) {
      const [key, value] = sourceDesc;

      createdObj[key.trim()] = value.trim();
    }
  }

  return createdObj;
}

module.exports = convertToObject;
