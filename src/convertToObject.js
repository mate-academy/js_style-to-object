'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrStyle = sourceString.split(';').filter(e => e.includes(':'));
  const arrKeyValue = arrStyle.map(e => {
    const [key, value] = e.trim().split(':');

    return [key.trim(), value.trim()];
  });

  return Object.fromEntries(arrKeyValue);
}

module.exports = convertToObject;
