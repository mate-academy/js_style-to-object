"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesArray = stylesString
    .split(";")
    .filter((style) => style.trim() !== "")
    .map((style) => style.trim());

  const stylesObject = {};

  stylesArray.forEach((style) => {
    const [property, value] = style.split(":").map((part) => part.trim());

    stylesObject[property] = value;
  });

  return stylesObject;
}
module.exports = convertToObject;
