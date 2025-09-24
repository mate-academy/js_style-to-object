'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((property) => property.trim())
    .filter(
      (property) =>
        property.includes(':') &&
        property.split(':')[0].trim().length > 0 &&
        property.slice(property.indexOf(':') + 1).trim().length > 0,
    )
    .map((property) => {
      const [key, ...valueParts] = property.split(':');

      return [key.trim(), valueParts.join(':').trim()];
    })
    .reduce((stylesProperties, [key, value]) => {
      stylesProperties[key] = value;

      return stylesProperties;
    }, {});
}

module.exports = convertToObject;
