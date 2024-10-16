'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
  .split(';')
  .reduce((res, style) => {
    const [key, value] = style.split(':');

    if (value) {
      res[key.trim()] = value.trim();
    }

    return res;
  }, {});
}
module.exports = convertToObject;
