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
  const stylesArray = sourceString
    .replace(/\n|\r /g, '')
    .split(';')
    .filter(style => style.trim() !== '');
  const result = {};

  for (let i = 0; i < stylesArray.length; i++) {
    const keyValuePair = stylesArray[i].split(':');

    result[keyValuePair[0].trim()] = keyValuePair[1].trim();
  }

  return result;
}

module.exports = convertToObject;
