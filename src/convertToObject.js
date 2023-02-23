'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(style => style.trim())
    .reduce((acym, style) => {
      const [key, value] = style.split(':');

      acym[key.trim()] = value.trim();

      return acym;
    }, {});
}
module.exports = convertToObject;
