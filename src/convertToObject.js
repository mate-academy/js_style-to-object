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
  // write your code here
  const styles = sourceString.split(';');
  const cssStyles = {};

  styles.forEach(item => {
    const propertyAndValue = item.split(':');

    if (propertyAndValue[0] !== undefined
        && propertyAndValue[1] !== undefined) {
      cssStyles[propertyAndValue[0].trim()] = propertyAndValue[1].trim();
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
