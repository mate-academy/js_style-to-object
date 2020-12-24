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
  const styles = sourceString.split(';')
    .map((elem) => elem.split(':'))
    .map((elem) => elem.map((item) => item.replace(/\s+/g, ' ')))
    .filter(elem => elem.length > 1)
    .map(elem => elem.map((item) => item.trim()));

  const result = {};

  for (const elem of styles) {
    result[elem[0]] = elem[1];
  }

  return result;
}

module.exports = convertToObject;
