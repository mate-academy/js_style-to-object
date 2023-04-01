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
  const properties = sourceString
    .split('\n')
    .filter(prop => prop.length > 5);

  const propList = {};

  for (const char of properties) {
    const index1 = char.indexOf(':');
    const index2 = char.indexOf(';');

    propList[char.slice(0, index1).trim()]
      = char.slice(index1 + 1, index2).trim();
  }

  return propList;
}

module.exports = convertToObject;
