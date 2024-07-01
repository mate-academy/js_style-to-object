'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map(string => string.split(':'))
    .map(elem => elem.map(row => row.trim()))
    .filter(item => item.length > 1)
    .reduce((a, x) => {
      a[x[0]] = x[1];

      return a;
    }, {}
    );

  return result;
}

module.exports = convertToObject;
