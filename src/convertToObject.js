'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const strings = sourceString.split('\n')
    .filter(string => string.includes(':'))
    .map(string => string.split(':'));

  const object = {};

  strings.forEach(string => {
    object[string[0].trim()] = string[1].slice(0, -1).trim();
  });

  return object;
}

module.exports = convertToObject;
