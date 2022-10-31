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
  const object = {};
  const filtered = sourceString.split(';');

  filtered.map(element => {
    const splited = element.split(':');

    if (splited.length === 2) {
      const key = splited[0].trim();
      const value = splited[1].trim();

      object[key] = value;
    }
  });

  return object;
}

module.exports = convertToObject;
