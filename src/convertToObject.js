'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleArray = sourceString.split(';')
    .map((str) => str.trim()).filter(Boolean);
  const styleObject = {};

  for (const style of styleArray) {
    const [property, values] = style
    .split(':')
    .map((str) => str
    .trim());

    styleObject[property] = values;
  }

  return styleObject;
}

module.exports = convertToObject;
