"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const STYLES_ARRAY = sourceString.split(";").filter(Boolean);
  const STYLES_OBJECT = {};

  STYLES_ARRAY.forEach((style) => {
    const [property, value] = style.split(":").map((part) => part.trim());

    STYLES_OBJECT[property] = value;
  });

  return STYLES_OBJECT;
}

module.exports = convertToObject;
