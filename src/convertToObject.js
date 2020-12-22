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
  const obj = {};

  sourceString.split(';')
    .forEach(el => {
      const str = el.split(':');

      if (str.length > 1) {
        obj[str[0].trim()] = str[1].trim();
      }
    });

  return obj;
}

module.exports = convertToObject;
