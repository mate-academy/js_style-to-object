'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 * example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitted = sourceString.split(';');
  const splittedKeysAndValues = [];
  const keysAndValues = {};

  for (const item of splitted) {
    splittedKeysAndValues.push(item.split(':'));
  }

  const splittedTrim = splittedKeysAndValues
    .filter((arr) => arr.length > 1)
    .map((keyAndValue) =>
      [
        keyAndValue[0].trim(),
        keyAndValue[1].trim(),
      ]
    );

  for (const arr of splittedTrim) {
    const [key, value] = arr;

    keysAndValues[key] = value;
  }

  return keysAndValues;
}

module.exports = convertToObject;
