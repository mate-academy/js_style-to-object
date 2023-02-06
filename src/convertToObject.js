'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const globalSplit = sourceString.split(';', sourceString.length)
    .map(item => item.trim())
    .filter(item => item.length > 1);

  const result = {};

  globalSplit.map(item => {
    const micro = item.split(':', 2);
    const [property, value] = micro;

    result[property.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
