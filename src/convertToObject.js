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
  const arr = sourceString.split(';').map(item => item.split(':').map(elem => {
    return elem.trim();
  }));

  const result = arr.reduce((obj, [property, value]) => {
    return {
      ...obj,
      [property]: value,
    };
  }, {});

  delete result[''];

  return result;
}

module.exports = convertToObject;
