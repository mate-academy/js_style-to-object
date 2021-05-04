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
  const trimedStyles = sourceString.split(';').map(element => element.split(':')
    .map(style => style.trim()))
    .filter(arr => arr.length === 2);

  const styles = {};

  trimedStyles.forEach((value) => (styles[value[0]] = value[1]));

  return styles;
}

module.exports = convertToObject;
