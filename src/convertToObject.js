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
  return sourceString
    .split(';')
    .filter(item => item.trim())
    .reduce((resultObj, keyValue) => {
      const [key, value] = keyValue.split(':').map(item => item.trim());

      resultObj[key] = value;

      return resultObj;
    }, {});
}

module.exports = convertToObject;
