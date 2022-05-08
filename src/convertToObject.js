'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 * with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.trim().split(';');
  const obj = {};

  properties.forEach(item => {
    const trimmed = item.trim();

    if (trimmed !== '') {
      const splitted = trimmed.split(':');
      const key = splitted[0].trim();
      const value = splitted[1].trim();

      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
