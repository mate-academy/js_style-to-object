'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  return styleString
    .split(';')
    .filter((line) => line.trim().length > 0)
    .reduce((stylesAcc, currentLine) => {
      const [key, value] = currentLine.split(':');

      return {
        ...stylesAcc,
        [key.trim()]: value.trim(),
      };
    }, {});
}

module.exports = convertToObject;
