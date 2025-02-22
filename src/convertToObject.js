'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const properties = sourceString.split(';');

  return properties
    .map((property) => property.trim())
    .filter((property) => property.length > 0)
    .reduce((prev, property) => {
      const [key, value] = property.split(':');

      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    }, {});
}

module.exports = convertToObject;
