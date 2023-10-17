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
  const LINE_SEPARATOR = ';';
  const PROPERTY_SEPARATOR = ':';
  const KEY_INDEX = 0;
  const VALUE_INDEX = 1;

  const arrayLines = sourceString.split(LINE_SEPARATOR);
  const result = {};

  for (const line of arrayLines) {
    const arrayProperties = line.trim().split(PROPERTY_SEPARATOR);
    const key = arrayProperties[KEY_INDEX];
    const value = arrayProperties[VALUE_INDEX];

    if (key.length !== 0 && value.length !== 0) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
