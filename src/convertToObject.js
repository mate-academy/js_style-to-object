'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((acc, declaration) => {
      const [prop, value] = declaration.split(':');

      if (value !== undefined) {
        return {
          ...acc,
          [prop.trim()]: value.trim(),
        };
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
