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
  const stylesObject = {};
  const styles = sourceString.split(';');

  styles.map(style => style.split(':'))
    .filter(style => style.length > 1)
    .forEach(style => {
      stylesObject[style[0].trim()] = style[1].trim();
    });

  return stylesObject;
}

module.exports = convertToObject;
