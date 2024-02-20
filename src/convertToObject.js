'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmedString = sourceString
    .split(';')
    .filter(item => item.trim() !== '');

  const resultingObject = trimmedString.reduce((obj, item) => {
    const [property, value] = item.split(':');

    obj[property.trim()] = value.trim();

    return obj;
  }, {});

  return resultingObject;
}

module.exports = convertToObject;
