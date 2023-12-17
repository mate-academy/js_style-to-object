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
  const resultObj = {};
  const array = sourceString.split(';').map(pair => pair.trim());

  array.forEach(pair => {
    const [property, value] = pair
      .split(':').map(item => item.trim());

    if (property && value) {
      resultObj[property] = value;
    }
  });

  return resultObj;
}

module.exports = convertToObject;
