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
  const splittedStyles = sourceString.split(';');
  const result = {};

  splittedStyles.map(styles => styles.split(':'))
    .filter(styles => styles.length > 1)
    .forEach(style => {
      result[style[0].trim()] = style[1].trim();
    });

  return result;
}

module.exports = convertToObject;
