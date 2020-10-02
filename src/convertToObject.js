'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
