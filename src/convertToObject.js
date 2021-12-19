'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keysAndValues = sourceString.split(';');
  const keysAndValuesClear = {};

  for (const item of keysAndValues) {
    const keyValue = item.split(':');

    if (keyValue[0] !== undefined && keyValue[1] !== undefined) {
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();

      keysAndValuesClear[key] = value;
    }
  }

  return keysAndValuesClear;
}

module.exports = convertToObject;
