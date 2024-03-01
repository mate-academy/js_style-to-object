"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(";");
  const stylesObject = {};

  for (let i = 0; i < stylesArray.length; i++) {
    const style = stylesArray[i].trim().split(":");

    if (style.length === 2) {
      const styleKey = style[0].trim();
      const styleValue = style[1].trim();

      stylesObject[styleKey] = styleValue;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
