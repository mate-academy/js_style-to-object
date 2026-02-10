'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  const rules = sourceString.split(';');

  rules.map((rule) => {
    const [property, value] = rule.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      convertedObject[trimmedProperty] = trimmedValue;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
