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
  const stylesList = sourceString.split(';')
    .map(item => item.split(':').map(prop => prop.trim()));

  const finalStyles = {};

  for (const key of stylesList) {
    if (key.length > 1) {
      finalStyles[key[0]] = key[1];
    }
  }

  return finalStyles;
}

module.exports = convertToObject;
