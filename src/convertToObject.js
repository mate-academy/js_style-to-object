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
  const data = sourceString.split(';');
  const result = {};
  const INDEX_OF_KEY = 0;
  const INDEX_OF_VALUE = 1;

  for (const line of data) {
    if (line.indexOf(':') !== -1) {
      const key = line.split(':')[INDEX_OF_KEY].trim();
      const value = line.split(':')[INDEX_OF_VALUE].trim();

      Object.assign(result, {
        [key]: value,
      });
    }
  }

  return result;
}

module.exports = convertToObject;
