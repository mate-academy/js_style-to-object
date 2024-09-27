'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':')
      .map(line => line.trim()))
    .filter(trimmedLine => trimmedLine[0] !== '')
    .reduce((css, property) => {
      css[property[0]] = property[1];

      return css;
    }, {});
}

module.exports = convertToObject;
