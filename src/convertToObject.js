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
  const final = sourceString.split(';')
    .map(rule => rule.split(':')
      .map(rulePiece => rulePiece.trim()))
    .filter(rule => rule.length > 1);

  return Object.fromEntries(final);
}
module.exports = convertToObject;
