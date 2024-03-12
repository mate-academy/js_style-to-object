'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((elem) => elem.trim())
    .reduce((obj, elem) => {
      let [key, style] = elem.split(':');

      key = key.trim();
      style = style.trim();

      if (key && style) {
        obj[key] = style;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
