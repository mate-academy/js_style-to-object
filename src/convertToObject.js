'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';')
        .map((str) => str.trim())
        .filter(str => str)
        .map((str) => str.split(':'))
        .map(([key, value]) => [key.trim(), value.trim()])
        .forEach(([key, value]) => result[key] = value);

        return result;
}

module.exports = convertToObject;
