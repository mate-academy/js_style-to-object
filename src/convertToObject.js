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
  const styles = {};

  sourceString.split(';')
    .filter((string) => string.trim().length > 0)
    .map((string) => string.split(':'))
    .forEach((element) => {
      element[1] = element[1].trim();

      styles[element[0].trim()] = element[1].trim();
    });

  return styles;
}

module.exports = convertToObject;
