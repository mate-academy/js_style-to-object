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
  const newStyle = {};
  const sourceStringArr = sourceString.split(';');

  sourceStringArr.filter(item => item.trim())
    .map(style => {
      const [key, value] = style.split(':');

      newStyle[key.trim()] = value.trim();
    });

  return newStyle;
}
module.exports = convertToObject;
