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
  const styles = [];

  sourceString.split(';').forEach((style) => {
    styles.push(style.split(':').map(property => property.trim()));
  });

  const listOfStyles = {};

  styles.filter(style => style[0] !== '').forEach((style) => {
    listOfStyles[style[0]] = style[1];
  });

  return listOfStyles;
}

module.exports = convertToObject;
