'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((style) => {
      const styleKeyValue = style.split(':');

      if (!styleKeyValue[0] || !styleKeyValue[1]) {
        return {};
      }

      return {
        [styleKeyValue[0].trim()]: styleKeyValue[1].trim(),
      };
    })
    .reduce((acc, cur) => Object.assign(acc, cur), {});
}

module.exports = convertToObject;
