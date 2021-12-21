'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  sourceString.split(';')
    .forEach(sign => {
      const newSource = sign.split(':');

      if (newSource.length > 1) {
        cssObj[newSource[0].trim()] = newSource[1].trim();
      }
    });

  return cssObj;
}

module.exports = convertToObject;
