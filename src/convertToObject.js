'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((pair) => pair.split(':').map((str) => str.trim()))
    .filter(([property, value]) => property && value)
    .reduce((styles, [property, value]) => {
      styles[property] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
