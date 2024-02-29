"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(";")
    .filter((style) => style.trim().length !== 0)
    .map((style) => {
      const [property, value] = style.split(":");

      return { [property.trim()]: value.trim() };
    })
    .reduce(
      (prev, obj) => ({
        ...prev,
        ...obj,
      }),
      {},
    );
}

module.exports = convertToObject;
