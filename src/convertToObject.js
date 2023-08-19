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
  const sourceStringToObj = sourceString
    .split(';')
    .reduce((styleObject, currentStyle) => {
      const styleTrim = currentStyle.trim();

      if (styleTrim === '') {
        return styleObject;
      }

      const [key, value] = styleTrim.split(':');

      return {
        ...styleObject,
        [key.trim()]: value.trim(),
      };
    }, {});

  return sourceStringToObj;
}

module.exports = convertToObject;
