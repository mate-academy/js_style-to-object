'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfLines = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length > 0);
  const newObject = {};

  arrayOfLines.forEach((line) => {
    const key = line.split(':')[0].trim();
    const value = line.split(':')[1].trim();

    if (key && value) {
      newObject[key] = value;
    }
  });

  return newObject;
}

module.exports = convertToObject;
