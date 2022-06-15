'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObj = {};

  sourceString
    .split(';')
    .map(item => item.trim().split(':'))
    .filter(item => item.length > 1)
    .forEach(item => {
      convertedObj[item[0].trim()] = item[1].trim();
    });

  return convertedObj;
}

module.exports = convertToObject;
