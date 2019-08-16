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
  const listOfProperties = sourceString.replace(/\n  /g, '').split(';');
  const cssProperties = {};

  for (let i = 0; i < listOfProperties.length; i++) {
    const [property, value] = listOfProperties[i].split(': ');
    cssProperties[property] = value;
  }
  return cssProperties;
}

module.exports = convertToObject;
