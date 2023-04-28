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
  const lines = sourceString.split('\n');
  const filledLines = lines.filter(line => line.match(/[a-z]/));
  const semicolonRemove = filledLines.map(line => line.slice(0, -1));
  const keyValuePairs = semicolonRemove.map(elem => elem.split(':'));
  const stylesObject = {};

  for (const pair of keyValuePairs) {
    stylesObject[pair[0].trim()] = pair[1].trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
