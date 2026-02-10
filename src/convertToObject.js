'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  const rules = sourceString.split(';').filter((rule) => rule.trim() !== '');

  rules.forEach((rule) => {
    const [property, value] = rule.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      if (trimmedProperty && trimmedValue) {
        convertedObject[trimmedProperty] = trimmedValue;
      }
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
