'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .map((line) => line.split(':'))
    .map(([key, value]) => [key.trim(), value.trim()])
    .reduce((styleObject, [key, value]) => {
      return {
        ...styleObject,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
