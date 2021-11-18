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
  const arrayOfStyles = sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(element => element.length > 1);

  const objectOfStyles = arrayOfStyles.reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key.trim()]: value.trim(),
    };
  }, {});

  return (objectOfStyles);
}

module.exports = convertToObject;
