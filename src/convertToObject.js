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

  const stylesSplittedBySemicolon = sourceString.split(';');

  const includeColumn = stylesSplittedBySemicolon.filter(
    element => element.includes(':')
  );
  const stylesSplittedByColumn = includeColumn
    .map(expression => expression.split(':'));

  const filteredStyles = stylesSplittedByColumn
    .map(([key, value]) => [key.trim(), value.trim()]);

  for (const [key, value] of filteredStyles) {
    styles[key] = value;
  }

  return styles;
}

module.exports = convertToObject;
