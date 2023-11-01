'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(property => property.split(':').map(el => el.trim()))
    .filter(property => property.length > 1)
    .map(property => ({ [property[0]]: property[1] }))
    .reduce((prev, current) => ({
      ...prev, ...current,
    }));
}

module.exports = convertToObject;
