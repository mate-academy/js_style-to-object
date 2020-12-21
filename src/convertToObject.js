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
  const arrayOfStyles = {};
  const properties = sourceString.split(';');

  for (let i = 0; i < properties.length; i++) {
    properties[i] = properties[i].split(':').map(rule => rule.trim());

    if (properties[i][0].length !== 0) {
      arrayOfStyles[properties[i][0]] = properties[i][1];
    }
  };

  return arrayOfStyles;
}

module.exports = convertToObject;
