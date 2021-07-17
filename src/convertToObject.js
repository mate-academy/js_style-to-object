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
  const object = {};

  const array = sourceString.split(';');

  array.forEach(element => {
    const key = element.split(':');

    if (key.length === 2) {
      object[key[0].trim()] = key[1].trim();
    }
  });

  return object;
}

module.exports = convertToObject;
