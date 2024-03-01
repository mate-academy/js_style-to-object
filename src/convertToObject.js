"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(";")
    .filter(Boolean);
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const [property, value] = style.split(":").map((part) => part.trim());

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
