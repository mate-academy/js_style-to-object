'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(property => property
      .split(':')
      .map(side => side
        .trim()))
    .filter(element => element[0])
    .reduce((acc, property) => {
      acc[property[0]] = property[1];

      return acc;
    }, {});
}

module.exports = convertToObject;
