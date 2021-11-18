'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newStr = sourceString.split(';')
    .map(item => item.trim().split(':'))
    .filter(item => item[0].length > 0);

  const result = {};

  newStr.forEach(item => {
    const newkey = item[0].trim();
    const newvalues = item[1].trim();

    result[newkey] = newvalues;
  });

  return result;
}

module.exports = convertToObject;
