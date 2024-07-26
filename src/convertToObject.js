'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const elements = sourceString.split(';');
  const result = {};

  elements.forEach(function (element) {
    const [name, value] = element.split(':');

    if (name.trim() && value.trim()) {
      result[name.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
