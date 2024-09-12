'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newStr = sourceString
    .split(';')
    .map(item => item.trim().split(':'))
    .filter(item => item.length > 1)
    .reduce((key, value) => {
      key[value[0].trim()] = value[1].trim();

      return key;
    }, {});

  return newStr;
}

module.exports = convertToObject;
