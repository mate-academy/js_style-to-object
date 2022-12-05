'use strict';

/**
 * Implement convertToObject function:
 *

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(item => item.length > 1)
    .reduce((style, value) => {
      style[value[0].trim()] = value[1].trim();

      return style;
    }, {});
}

module.exports = convertToObject;
