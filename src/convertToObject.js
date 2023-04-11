'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a
 * string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the
 *  values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const stringArray = sourceString.split(';');

  stringArray.map(item => {
    const index = item.indexOf(':');
    const key = item.slice(0, index).trim();
    const value = item.slice(index + 1).trim();

    obj[key] = value;
    delete obj[''];
  });

  return obj;
}

module.exports = convertToObject;
