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
  const stylesObj = {};

  sourceString
    .split(';')
    .map(prop => {
      const [ key, value ] = prop.split(':');

      if (value) {
        stylesObj[key.trim()] = value.trim();
      }
    });

  return stylesObj;
}

module.exports = convertToObject;
