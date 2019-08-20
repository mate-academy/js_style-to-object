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
  const objectStyles = {};
  const cssStyle = sourceString.trim().split(';');

  for (let i = 0; i < cssStyle.length; i++) {
    cssStyle[i] = cssStyle[i].trim().split(': ');
    objectStyles[cssStyle[i][0]] = cssStyle[i][1];
  };

  return objectStyles;
}

module.exports = convertToObject;
