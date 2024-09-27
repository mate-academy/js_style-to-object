'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceFilteredArr = sourceString.split(';')
    .filter(prop => prop.includes(':'))
    .map(string => string.split(':')
      .map(item => item.trim()));

  const sourceObject = {};

  sourceFilteredArr.forEach(function(item) {
    sourceObject[`${item[0]}`] = `${item[1]}`;
  });
  return sourceObject;
}

module.exports = convertToObject;
