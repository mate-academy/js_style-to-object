'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayString = sourceString.split(';');
  const styleObject = arrayString
    .filter((element) => {
      if (element.trim() === '') {
        return false;
      }

      return true;
    })
    .map((string) => {
      const splitOneString = string.split(':');
      const [key, value] = splitOneString;

      return [key.trim(), value ? value.trim() : null];
    })
    .reduce((sum, element) => {
      const [key, value] = element;

      sum[key] = value;

      return sum;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
