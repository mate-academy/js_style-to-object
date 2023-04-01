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
    .split(';')
    .filter(prop => prop.trim().length > 5);

  const propList = {};

  for (const char of properties) {
    const miniArray = char.split(':');

    propList[miniArray[0].trim()] = miniArray[1].trim();
  }

  return propList;
}

module.exports = convertToObject;
