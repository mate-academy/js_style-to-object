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
  const result = {};

  const properties = sourceString.trim().split(/\s*;\s*/);

  for (const item of properties) {
    if (item === '') {
      continue;
    }

    const propertyAndValue = item.split(/\s*:\s*/);

    result[propertyAndValue[0]] = propertyAndValue[1];
  }

  return result;
}

module.exports = convertToObject;
