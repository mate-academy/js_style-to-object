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
  const tempArray = sourceString.split(';').map(item => item.trim());
  const propertiesObj = {};

  for (const parameter of tempArray) {
    const [key, value] = parameter.split(':').map(item => item.trim());

    if (key) {
      propertiesObj[key] = value;
    }
  }

  return propertiesObj;
}

module.exports = convertToObject;
