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
  const resultConvert = {};

  sourceString
    .split(';')
    .map((item) => item.split(':'))
    .filter((elem) => elem.length === 2)
    .forEach((item) => {
      const key = item[0].trim();
      const value = item[1].trim();

      return (resultConvert[key] = value);
    });

  return resultConvert;
}

module.exports = convertToObject;
