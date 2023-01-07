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
  const stringArray = sourceString.split(';');
  const keysAndValues = stringArray.map(element => element.split(':'));

  for (let i = 0; i < keysAndValues.length; i++) {
    const element = keysAndValues[i];

    const key = element[0].trim();
    const value = String(element[1]).trim();

    if (value === 'undefined') {
      continue;
    }

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
