'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .forEach((item) => {
      const [property, ...valueParts] = item.split(':');

      if (!property || valueParts.length === 0) {
        return;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim();

      stylesObject[key] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
