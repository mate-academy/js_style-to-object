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
  const sourceStringSeparated = sourceString.split(';');
  const styles = {};

  sourceStringSeparated.forEach(style => {
    const styleSeparated = style.split(': ').map(styleItem => styleItem.trim());

    if (styleSeparated[0] && styleSeparated[1]) {
      styles[styleSeparated[0]] = styleSeparated[1];
    }
  });

  return styles;
}

module.exports = convertToObject;
