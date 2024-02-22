'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function trimString(string) {
  return string.split('')
    .filter(char => char !== '\n')
    .join('')
    .trim();
}

function convertToObject(sourceString) {
  const arrOfProperties = sourceString.split(';\n');

  const arrOfKeyValuePairs = arrOfProperties
    .map(property => property.split(':'))
    .filter(pair => trimString(pair.join('')) !== '');

  return arrOfKeyValuePairs.reduce((obj, pair) => {
    obj[trimString(pair[0])] = trimString(pair[1]);

    return obj;
  }, {});
}

module.exports = convertToObject;
