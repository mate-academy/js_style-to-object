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
  const properties = [];

  for (let i = 0; i < sourceArray.length; i++) {
    properties.push(sourceArray[i].split(':'));
  }

  const styles = {};

  for (let i = 0; i < properties.length; i++) {
    const propertyName = properties[i][0];
    const propertyValue = properties[i][1];

    if (propertyValue !== undefined) {
      styles[propertyName.trim()] = propertyValue.trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
