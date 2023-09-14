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
  const result = {};
  const allCommands = sourceString.split(';');

  allCommands.forEach((item) => {
    const commandParts = item.split(':');
    const [firstCommandPart, secondCommandPart] = commandParts;

    if (firstCommandPart && secondCommandPart) {
      const key = firstCommandPart.trim();
      const value = secondCommandPart.trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
