'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString
    .split(';')
    .map((item) => item.trim())
    .join(';')
    .split(':')
    .map((item) => item.trim())
    .join(':')
    .split(';')
    .filter((item) => item.length > 0);

  const result = array.reduce((prev, item) => {
    const [property, value] = item.split(':');

    return {
      ...prev,
      [property]: value,
    };
  }, {});

  return result;
}

module.exports = convertToObject;
