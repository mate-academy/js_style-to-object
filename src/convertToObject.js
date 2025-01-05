'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properites = sourceString.split(';');
  const result = {};

  properites.forEach((property) => {
    const spacePosition = property.indexOf(':');
    const key = property.slice(0, spacePosition).trim();
    const value = property.slice(spacePosition + 1).trim();

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
