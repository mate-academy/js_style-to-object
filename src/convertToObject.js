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
  const obj = {};
  sourceString.split(';').forEach(
    propertyAndValue => {
      propertyAndValue = propertyAndValue.trim().split(': ');
      obj[propertyAndValue[0]] = propertyAndValue[1];
    }
  );
  return obj;
}

module.exports = convertToObject;
