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
      if (currentStyle.trim() === '') {
        return styleObject;
      }

      const valueArr = currentStyle.trim().split(':');

      return {
        ...styleObject,
        [valueArr[0].trim()]: valueArr[1].trim(),
      };
    }, {});

  return sourceStringToObj;
}

module.exports = convertToObject;
