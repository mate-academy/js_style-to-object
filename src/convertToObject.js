'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(style => style.trim())
    .reduce((obj, style) => {
      const [key, value] = style.split(':');

      obj[key.trim()] = value.trim();

      return obj;
    }, {});
}

module.exports = convertToObject;
