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
  const object = {};

  sourceString.split(';')
    .forEach(str => {
      const splitted = str.split(':');

      if (splitted.length > 1) {
        object[splitted[0].trim()] = splitted[1].trim();
      }
    }
    );

  return object;
}

module.exports = convertToObject;
