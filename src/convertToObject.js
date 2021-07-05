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

  sourceString.replace(/\n/g, '')
    .split(';')
    .map(el => {
      if (el !== '') {
        const arrElement = el.split(':');

        if (arrElement.length > 1) {
          result[arrElement[0].trim()] = arrElement[1].trim();
        }
      }
    });

  return result;
}

module.exports = convertToObject;
