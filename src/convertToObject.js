'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringSplitted = sourceString.split(';');
  const sourceStringConverted = {};

  for (const el of sourceStringSplitted) {
    if (el.trim()) {
      const property = el.split(':')[0].trim();
      const value = el.split(':')[1].trim();

      sourceStringConverted[property] = value;
    }
  }

  return sourceStringConverted;
}

module.exports = convertToObject;
