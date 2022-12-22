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
  const props = sourceString.split(';');
  const propsAsObject = {};

  for (const prop of props) {
    const entry = prop.split(':');

    if (entry[1]) {
      Object.assign(propsAsObject, { [entry[0].trim()]: entry[1].trim() });
    }
  }

  return propsAsObject;
}

module.exports = convertToObject;
