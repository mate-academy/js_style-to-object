'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrString = sourceString.split(';')
    .filter(el => el.trim().length > 0)
    .map(el => el.split(':'))
    .map(key => key.map(value => value.trim()));
  const resObj = {};

  for (const [key, value] of arrString) {
    resObj[key] = value;
  }

  return resObj;
}

module.exports = convertToObject;
