'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const result = splitString
    .filter((element) => {
      if (element.trim() === '') {
        return false;
      }

      return true;
    })
    .map((string) => {
      const splitOneString = string.split(':');
      const [key, value] = splitOneString;

      return [key.trim(), value.trim()];
    })
    .reduce((sum, element) => {
      const [key, value] = element;

      sum[key] = value;

      return sum;
    }, {});

  return result;
}

module.exports = convertToObject;
