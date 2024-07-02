'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objStyles = {};

  sourceString.split(';').map((style) => {
    const arrStyle = style.split(':').map((el) => el.trim());

    objStyles[arrStyle[0]] = arrStyle[1];
  });

  return objStyles;
}

module.exports = convertToObject;
