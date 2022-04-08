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
  const partsString = sourceString.split(';');
  const newPartsArr = partsString.map(changesParts);
  const result = {};

  for (const item of newPartsArr) {
    Object.assign(result, item);
  }

  return result;
}

function changesParts(part) {
  const index = part.indexOf(':');
  const key = part.slice(0, index).trim();
  const value = part.slice(index + 1).trim();
  const obj = {};

  if (key.length > 0) {
    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
