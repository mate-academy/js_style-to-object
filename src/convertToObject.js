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
  const result = {};
  const attributes = sourceString.split(';').map(rule => rule.trim());

  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i]) {
      const entry = attributes[i].split(':').map(rule => rule.trim());

      result[entry.splice(0, 1)[0]] = entry.join(':');
    }
  }

  return result;
}

module.exports = convertToObject;
