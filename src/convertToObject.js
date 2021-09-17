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
  const string = sourceString.split(';');
  const objStyles = {};

  string.forEach(style => {
    const splitStyle = style.split(':');

    if (splitStyle.length > 1) {
      const styleName = splitStyle[0].trim();
      const styleParameter = splitStyle[1].trim();

      objStyles[styleName] = styleParameter;
    }
  });

  return objStyles;
}

module.exports = convertToObject;
