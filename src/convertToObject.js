'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    if (!rule.trim()) {
      return;
    }

    const [property, value] = rule.split(':');

    if (!property || !value) {
      return;
    }

    const cleanProperty = property.trim();

    if (cleanProperty && value) {
      stylesObject[cleanProperty] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
