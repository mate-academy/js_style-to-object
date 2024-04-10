'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((el) => el.trim())
    .map((el) => el.split(':'))
    .map((key) => key.map((value) => value.trim()))
    .filter((el) => el.length > 1)
    .map((prop) => (result[prop[0]] = prop[1]));

  return result;
}

module.exports = convertToObject;
