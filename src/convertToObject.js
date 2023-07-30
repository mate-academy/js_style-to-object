'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  let current;
  const properties = sourceString.split(';');

  for (let i = 0; i < properties.length; i++) {
    current = properties[i].split(':');

    if (!current[1]) {
      continue;
    }
    current[0] = current[0].trim();
    current[1] = current[1].trim();
    obj[current[0]] = current[1];
  }

  return obj;
}

module.exports = convertToObject;
