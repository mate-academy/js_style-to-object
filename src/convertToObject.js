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
  const trimedStyles = sourceString
    .split(';')
    .map(prop => prop
      .split(':')
      .map(style => style.trim()))
    .filter(arr => arr.length === 2);

  const styles = {};

  trimedStyles.forEach(([key, value]) => (styles[key] = value));

  return styles;
}

module.exports = convertToObject;
