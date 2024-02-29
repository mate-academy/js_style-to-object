"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const STYLES_ARRAY = sourceString.split(";");
  const STYLES_OBJECT = {};

  for (let i = 0; i < STYLES_ARRAY.length; i++) {
    const STYLE = STYLES_ARRAY[i].trim().split(":");

    if (STYLE.length === 2) {
      const STYLE_KEY = STYLE[0].trim();
      const STYLE_VALUE = STYLE[1].trim();

      STYLES_OBJECT[STYLE_KEY] = STYLE_VALUE;
    }
  }

  return STYLES_OBJECT;
}

module.exports = convertToObject;
