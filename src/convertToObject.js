'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';');
  const result = {};

  for (const elem of array) {
    const trimmedElem = elem.trim().split(':', 2);

    if (trimmedElem.length === 2) {
      const key = trimmedElem[0].trim();
      const value = trimmedElem[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
