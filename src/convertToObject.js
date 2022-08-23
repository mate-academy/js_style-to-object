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
  const strDivided = sourceString.split(';');
  let key;
  let value;
  let obj = {};

  strDivided.forEach(el => {
    [key, value] = el.split(':');

    if (value !== undefined) {
      obj = Object.assign(obj, { [key.trim()]: value.trim() });
    }
  });

  return obj;
}

module.exports = convertToObject;
