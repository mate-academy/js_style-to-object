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
  const result = {};

  const properties = sourceString.split(';');

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i].split(':');
    const trimed = property.map(item => item.trim());

    if (trimed[0] !== '') {
      result[trimed[0]] = trimed[1];
    }
  }

  return result;
}

module.exports = convertToObject;
