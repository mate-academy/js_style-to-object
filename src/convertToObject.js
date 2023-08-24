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
  const arrOfProperties = sourceString.split(';');

  const result = arrOfProperties.reduce((accumulator, item) => {
    const trimElement = item.trim();

    if (!trimElement) {
      return accumulator;
    }

    const [key, value] = trimElement.split(':');

    accumulator[key.trim()] = value.trim();

    return accumulator;
  }, {});

  return result;
}

module.exports = convertToObject;
