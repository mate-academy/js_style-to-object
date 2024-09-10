'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .trim()
    .split(';')
    .filter((item) => item.trim() !== '')
    .reduce((styleObj, rule) => {
      const [key, value] = rule.split(':');

      if (key && value) {
        styleObj[key.trim()] = value.trim();
      }

      return styleObj;
    }, {});
}
module.exports = convertToObject;
