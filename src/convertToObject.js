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
  const modifiedStyles = styles.map(el => el.split(': '));
  const css = {};

  for (const [key, value] of modifiedStyles) {
    if (key.length > 1 && value) {
      css[key.trim()] = value.trim();
    }
  }

  return css;
}

module.exports = convertToObject;
