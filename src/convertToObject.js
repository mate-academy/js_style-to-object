'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(style => style.split(':').map(property => property.trim()))
    .filter(style => style[0] !== '')
    .reduce((properties, property) => {
      return {
        ...properties,
        [property[0]]: property[1],
      };
    }, {});
}

module.exports = convertToObject;
