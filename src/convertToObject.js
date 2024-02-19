'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleCommand = sourceString.split(';');
  const result = {};

  for (const part of styleCommand) {
    let twoPartsCommand = part.split(':');

    if (twoPartsCommand[1]) {
      result[twoPartsCommand[0].trimEnd().trimStart()]
      = twoPartsCommand[1].trimEnd().trimStart();
      twoPartsCommand = [];
    }
  }

  return result;
  // write your code here
}

module.exports = convertToObject;
