'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';').reduce((acc, rule) => {
    const [property, value] = rule.split(':');

    if (property && value) {
      acc[property.trim()] = value.trim();
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
