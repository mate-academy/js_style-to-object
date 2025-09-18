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
    .filter((property) => property)
    .map((property) => {
      const [key, ...valueProperty] = property.split(':');

      return [key.trim(), valueProperty.join(':').trim()];
    })
    .reduce((obj, [key, value]) => {
      obj[key] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
