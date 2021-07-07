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

  sourceString.replace(/;/g, '')
    .split('\n')
    .filter(properties => {
      if (properties !== '') {
        const item = properties.split(':');

        if (item[0] !== undefined && item[1] !== undefined) {
          result[item[0].trim()] = item[1].trim();
        }
      }
    });

  return result;
}

module.exports = convertToObject;
