'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const inputImprovement = sourceString
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .replace(/\n\s*\n/g, '\n')
    .trim();

  const toArray = inputImprovement.split(';');

  const toObject = {};

  toArray.forEach((e) => {
    const part = e.split(':');

    if (part[0].trim() !== '') {
      toObject[part[0]] = part[1];
    }
  });

  return toObject;
}

module.exports = convertToObject;
