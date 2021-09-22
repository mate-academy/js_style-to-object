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
  // write your code here
  const splittedString = sourceString.split(';');
  const styles = {};

  splittedString.forEach(style => {
    const splitedStyle = style.split(':');

    if (splitedStyle.length > 1) {
      const styleName = splitedStyle[0].trim();
      const styleParameter = splitedStyle[1].trim();

      styles[styleName] = styleParameter;
    }
  });

  return styles;
}

module.exports = convertToObject;
