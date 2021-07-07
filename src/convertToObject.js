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
  const allStyles = sourceString.trim().split(';');
  allStyles.pop();

  const styles = {};

  allStyles.forEach(element => {
    const property = element.split(':');
    styles[property[0].trim()] = property[1].trim();
  });

  return styles;
}

module.exports = convertToObject;
