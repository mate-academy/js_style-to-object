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
  const sourceStrings = sourceString.split(';')
    .map(item => item.split(':'))
    .map(item => item.map(part => part.trim()));

  for (let i = 0; i < sourceStrings.length; i++) {
    if (sourceStrings[i].length > 1) {
      styles[sourceStrings[i][0]] = sourceStrings[i][1];
    }
  }

  return styles;
}

module.exports = convertToObject;
