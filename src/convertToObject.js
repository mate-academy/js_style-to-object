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
  const trimed = sourceString.split(';')
    .map(x => x.trim())
    .filter(x => x.trim().length > 0)
    .map((item) => item.split(':'))
    .map((item) => item.map((el) => el.trim()));

  const result = {};

  trimed.map(element => {
    result[element[0]] = element[1];

    return result;
  });

  return result;
}

module.exports = convertToObject;
