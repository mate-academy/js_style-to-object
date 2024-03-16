"use strict";

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = sourceString.split(";");
  const result = {};

  object.forEach((item) => {
    const [property, value] = item.split(":").map((part) => part.trim());

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
