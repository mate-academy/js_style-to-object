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
  const styles = {};

  const splitBySemicolon = sourceString.split(';');
  const arrayOfStyles = splitBySemicolon.map(item => {
    const splitByColumn = item.split(':');

    return splitByColumn.map(element => element.trim());
  });
  const filteredArrayOfStyles = arrayOfStyles.filter(item => item.length > 1);

  for (const item of filteredArrayOfStyles) {
    styles[item[0]] = item[1];
  }

  return styles;
}

module.exports = convertToObject;
