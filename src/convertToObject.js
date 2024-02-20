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

  for (const partCommand of styleCommand) {
    partCommand.split(':').map((part) => part.trim())
      .reduce((firstpart, secondpart) => (result[firstpart] = secondpart));
  }

  return result;
  // write your code here
}

module.exports = convertToObject;
