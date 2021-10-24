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

  sourceString
    .trim()
    .split(';')
    .forEach(element => {
      if (element === undefined) {
        return;
      }

      const [key, value] = element.trim().split(':');

      if (key === undefined || value === undefined) {
        return;
      }

      obj[key.trim()] = value.trim();
    });

  return obj;
}

module.exports = convertToObject;
