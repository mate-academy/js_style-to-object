'use strict';

const stylesString = require('./stylesString');

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
  const resultObject = {};

  const stylesStringSplitted = stylesString.split(';');

  const trimmedString = stylesStringSplitted
    .map(string => string.split(':')
      .map(value => value.trim()));

  for (const value of trimmedString) {
    if (value.length > 1) {
      resultObject[value[0]] = value[1];
    }
  }

  return resultObject;
}

module.exports = convertToObject;
