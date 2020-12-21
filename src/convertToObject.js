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
  // write your code here
  const objOfStyles = {};

  const arrayOfStyles = sourceString.split(';');

  arrayOfStyles
    .filter(item => item.length > 5)
    .map((item) => item.split(':'))
    .map((item) => [item[0].trim(), item[1].trim()])
    .forEach(item => {
      objOfStyles[item[0]] = item[1];
    });

  return objOfStyles;
}

module.exports = convertToObject;
