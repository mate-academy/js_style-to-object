'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString.split(';');
  const styleObj = {};

  styleArr.forEach((style) => {
    if (style.trim()) {
      const [key, value] = style.split(':');

      styleObj[key.trim()] = value.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
