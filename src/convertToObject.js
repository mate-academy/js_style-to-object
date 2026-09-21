'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, rule) => {
    const [property, value] = rule.split(':');

    if (property && value) {
      acc[property.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
