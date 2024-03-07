'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const items = sourceString.split(';').map((item) => item.split(':'));
  const result = {};

  items.forEach((item) => {
    const [key, value] = item;

    if (item.length === 2) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
