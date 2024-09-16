/* eslint-disable max-len */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const sourceObj = sourceString
    .split(';')
    .map(source => source.trim())
    .filter(source => source.length > 1)
    .map(source => source.split(':'))
    .reduce((obj, [key, value]) => {
      return {
        ...obj, [key.trim()]: value.trim(),
      };
    }, {});

  return sourceObj;
}

module.exports = convertToObject;
