'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objStyles = {};

  sourceString
    .split(';')
    .filter((el) => el.length > 0)
    .forEach((style) => {
      const arrStyle = style.split(':').map((el) => el.trim());

      if (
        arrStyle.length === 2 &&
        arrStyle[0].length > 0 &&
        arrStyle[1].length
      ) {
        objStyles[arrStyle[0]] = arrStyle[1];
      }
    });

  return objStyles;
}

module.exports = convertToObject;
