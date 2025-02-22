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

    const cleanProperty = property.trim();

    if (property && value) {
      stylesObject[cleanProperty] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
