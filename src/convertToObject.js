'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styles = sourceString
    .split(';')
    .map(property => property.trim())
    .map(property => property.split(':')
      .map(item => item.trim()));

  styles = Object.fromEntries(styles);

  delete styles[''];

  return styles;
}

module.exports = convertToObject;
