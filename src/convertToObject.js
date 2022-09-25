'use strict';

/**
 * Implement convertToObject function:
 *

 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const stylesPart = sourceString.split(';').map(part => part.split(':'));

  stylesPart.forEach(part => {
    if (part.length === 2) {
      const [key, value] = part;

      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
