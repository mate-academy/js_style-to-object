'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedString = sourceString
    .trim()
    .split(';')
    .filter((declaration) => declaration.trim().length > 0)
    .reduce((accumulator, declaration) => {
      const parts = declaration.split(':');

      if (parts.length >= 2) {
        const propertyName = parts[0].trim();
        const propertyValue = parts.slice(1).join(':').trim();

        if (propertyName.length > 0) {
          accumulator[propertyName] = propertyValue;
        }
      }

      return accumulator;
    }, {});

  return normalizedString;
}

module.exports = convertToObject;
