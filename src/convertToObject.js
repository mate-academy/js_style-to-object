'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const splittedValue = sourceString.split(';');

  for (let i = 0; i < splittedValue.length; i++) {
    const entry = splittedValue[i].split(':');

    if (entry.length === 2) {
      const property = entry[0].trim();
      const value = entry[1].trim();

      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
