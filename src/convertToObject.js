'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  return sourceString
    .split(';')
    .filter((rule) => rule.trim() !== '')
    .reduce((stylesObject, rule) => {
      const [key, value] = rule.split(':').map((item) => item.trim());

      stylesObject[key] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
