'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sum = {};

  const result = sourceString.split(`\n`);

  result.map((x) => {
    if (x.length > 3) {
      const index = x.indexOf(`:`);
      const index2 = x.indexOf(`;`);
      const key = x.slice(0, index).trim();
      const val = x.slice(index + 1, index2).trim();

      return (sum[key] = val);
    }
  });

  return sum;
}

module.exports = convertToObject;
