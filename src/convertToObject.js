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
  const cssValues = sourceString
    .split(';')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const resultObject = {};

  cssValues.forEach(item => {
    const [key, value] = item.split(':');
    const cleanKey = key.trim();
    const cleanValue = value.trim();

    resultObject[cleanKey] = cleanValue;
  });

  return resultObject;
}

module.exports = convertToObject;
