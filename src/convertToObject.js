'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((stylesObject, rule) => {
      const [property, value] = rule.split(':');

      stylesObject[property.trim()] = value.trim();

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
