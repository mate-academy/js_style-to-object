'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in)
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in)
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const strArray = sourceString.split(';');

  strArray.forEach(string => {
    const partsArr = string.split(':');

    if (partsArr[1]) {
      const key = partsArr[0].slice(1).trim();

      result[key] = partsArr[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
