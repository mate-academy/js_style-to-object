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

  sourceString.split(';').forEach(prop => {
    if (prop.includes(':')) {
      const key = prop.split(':')[0].trim();
      const value = prop.split(':')[1].trim();

      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
