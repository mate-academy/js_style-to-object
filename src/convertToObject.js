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
  return sourceString
    .split(';')
    .reduce((obj, pair) => {
      const [key, value] = pair.split(':');

      if (value) {
        obj[key.trim()] = value.trim();
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
