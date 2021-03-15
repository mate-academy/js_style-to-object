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

  const sourceArray = sourceString.split(';');
  const property = [];

  for (let i = 0; i < sourceArray.length; i++) {
    property.push(sourceArray[i].split(':'));
  }

  const styles = {};

  for (let i = 0; i < property.length; i++) {
    if (property[i][1] !== undefined) {
      styles[property[i][0].trim()]
        = property[i][1].trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
