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
  const styles = sourceString
    .split(';')
    .map(row => row.split(':')
      .map(rowPart => rowPart.trim()))
    .filter(style => style.length > 1);

  return Object.fromEntries(styles);
}

module.exports = convertToObject;
