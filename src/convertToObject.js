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
  return sourceString
    .split(';')
    .reduce((object, property) => {
    const [key, value] = property.split(':');

    if (key && value) {
      object[key.trim()] = value.trim();
    }

    return object;
  }, {});
}

module.exports = convertToObject;
