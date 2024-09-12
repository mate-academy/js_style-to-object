'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const splitedArray = sourceString.split(';');
  splitedArray.forEach((item) => {
    const [key, value] = item.split(':');
    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  });
  return result;
}

module.exports = convertToObject;
