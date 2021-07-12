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
  const values = sourceString
    .split(';')
    .map(phrase => phrase.split(':')
      .map(word => word.trim()))
    .filter(checkLength => checkLength.length === 2);

  return Object.fromEntries(values);
};

module.exports = convertToObject;
