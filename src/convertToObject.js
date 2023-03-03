'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const splittedSourceString = sourceString.split(';');

  for (const prop of splittedSourceString) {
    const values = prop.split(':');

    if (values.length === 2) {
      const [key, value] = values;

      obj[key.trim()] = value.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
