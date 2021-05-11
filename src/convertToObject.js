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
  const styles = sourceString.split(';');
  const css = {};

  for (const value of styles) {
    const temp = value.split(':');

    if (temp[0] === undefined || temp[1] === undefined) {
      continue;
    }
    css[temp[0].trim()] = temp[1].trim();
  }

  return css;
}

module.exports = convertToObject;
