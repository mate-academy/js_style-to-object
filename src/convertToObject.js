'use strict';

/*
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .reduce((acc, style) => {
      const [key, value] = style
        .split(':')
        .map(part => part.trim());

      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
