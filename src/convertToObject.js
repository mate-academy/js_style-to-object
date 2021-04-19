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
  const str = sourceString.split(';');

  str.forEach(element => {
    const [name, value] = element.split(':');

    if (value) {
      result[name.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
