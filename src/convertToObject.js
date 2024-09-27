'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const filteredArr = sourceString.split(';')
    .filter(item => item.includes(':'))
    .map(item => item.split(':')
      .map(str => str.trim()));

  filteredArr.forEach(function(item) {
    result[`${item[0]}`] = `${item[1]}`;
  });

  return result;
}

module.exports = convertToObject;
