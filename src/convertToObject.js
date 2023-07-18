'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';\n')
    .map(str => str.split(':'))
    .filter(arr => arr.length === 2)
    .map((arr) => {
      const [ a, b ] = arr;

      return [a.trim(), b.trim()];
    })
    .reduce((prev, item) => {
      return {
        ...prev,
        [item[0]]: item[1],
      };
    }, {});

  return result;
}

module.exports = convertToObject;
