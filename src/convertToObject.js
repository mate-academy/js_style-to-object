"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(";");
  const styleObject = {};

  for (let i = 0; i < styleArray.length; i++) {
    const style = styleArray[i].trim().split(":");

    if (style.length === 2) {
      const key = style[0].trim();
      const value = style[1].trim();

      styleObject[key] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
