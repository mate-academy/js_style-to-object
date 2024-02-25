"use strict";

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(";").reduce((acc, elem) => {
    const parts = elem.split(":").map((part) => part.trim());

    if (parts.length === 2) {
      const [key, value] = parts;

      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
