'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const string = sourceString.split('\n')
    .filter(item => item.length > 0)
    .map(item => item.split(':'))
    .map(word => word.map(restyle => restyle.replace(';', '').trim()))
    .filter(item => item.length > 1);

  for (let i = 0; i < string.length; i++) {
    const key = string[i][0];
    const value = string[i][1];

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
