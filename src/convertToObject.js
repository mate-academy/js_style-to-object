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
  const styles = sourceString.split(';').map(s => s.split(':'))
    .map(s => s.map(x => x.trim()))
    .filter(x => x.length === 2);
  const styleObject = {};

  for (const style of styles) {
    styleObject[style[0]] = style[1];
  }

  return styleObject;
}

module.exports = convertToObject;
