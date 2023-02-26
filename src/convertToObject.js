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
  function splitEveryString(name) {
    return name.split(':');
  }

  const arr = sourceString.split(';');
  const arrSource = arr.map(splitEveryString);
  const obj = {};

  for (const ch of arrSource) {
    if (ch.length > 1) {
      obj[ch[0].trim()] = ch[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
