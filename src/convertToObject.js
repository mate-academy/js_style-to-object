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
  const result = {};

  sourceString
    .split(';')
    .map(property => property
      .split(':')
      .map(elem => elem.trim()))
    .forEach(elem => {
      (elem[0]) && (result[elem[0]] = elem[1]);
    });

  return result;
}

module.exports = convertToObject;
