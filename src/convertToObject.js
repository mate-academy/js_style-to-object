'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((acc, rule) => {
    const [property, value] = rule.split(':');

    if (!property || !value || property.trim() === '' || value.trim() === '') {
      return acc;
    }

    acc[property.trim()] = value.trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
