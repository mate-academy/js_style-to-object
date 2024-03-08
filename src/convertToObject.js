'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  return sourceString
    .trim()
    .split(';')
    .filter(Boolean)
    .reduce((result, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((item) => item.trim());

      result[property] = value;

      return result;
    }, {});
}

module.exports = convertToObject;
