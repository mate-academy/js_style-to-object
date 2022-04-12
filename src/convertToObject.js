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
  const outerObject = {};
  const regex = /(?<propName>[a-z-]+)\s*:\s*(?<propValue>[[a-z-#!\s0-9.]+)/g;

  const matches = sourceString.matchAll(regex);

  for (const match of matches) {
    outerObject[match.groups.propName] = match.groups.propValue.trim(' ');
  }

  return outerObject;
}

module.exports = convertToObject;
