'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((eachLine) => eachLine.trim())
    .filter((line) => line.includes(':'))
    .reduce((accumulator, line) => {
      const [styleName, value] = line.split(':');

      accumulator[styleName.trim()] = value.trim();

      return accumulator;
    }, {});
}

module.exports = convertToObject;
