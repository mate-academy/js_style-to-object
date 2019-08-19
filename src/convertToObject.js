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
  const objectFromString = {};
  const cssStyle = sourceString.trim().split(';');

  for (let i = 0; i < cssStyle.length; i++) {
    cssStyle[i] = cssStyle[i].trim().split(': ');
    objectFromString[cssStyle[i][0]] = cssStyle[i][1];
  };

  return objectFromString;
}

module.exports = convertToObject;
