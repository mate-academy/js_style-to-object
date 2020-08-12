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
  const result = {};

  sourceString
    .split('\n')
    .join('')
    .split(';')
    .filter(style => style)
    .map(style => style.split(':'))
    .forEach(item => {
      if (item.length > 1) {
        result[item[0].trim()] = item[1].trim();
      }
    });

  return result;
}

module.exports = convertToObject;
