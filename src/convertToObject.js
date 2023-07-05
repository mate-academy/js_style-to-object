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
  const resultObj = {};

  sourceString
    .split(';')
    .forEach(row => {
      let [key, value] = row.split(':');

      key = key.replace(/\n| /g, '');
      value && (value = value.trim());

      // checking if key is exist and adding values in resultObject
      key && (resultObj[key] = value);
    });

  return resultObj;
}

module.exports = convertToObject;
