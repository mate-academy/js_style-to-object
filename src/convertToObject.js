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
  const str = sourceString.trim();
  const property = str.split(';');
  const resultObject = {};

  property.forEach(item => {
    const element = item.split(':');
    const key = element[0] ? element[0].trim() : element[0];
    const value = element[1] ? element[1].trim() : element[1];

    if (key && value) {
      resultObject[key] = value;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
