'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 *
 */

function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(/;\s*/)
    .filter((line) => line.trim())
    .forEach((line) => {
      const [property, value] = line.split(/:\s*/);

      if (property && value) {
        styleObject[property.trim()] = value.trim();
      }
    });

  return styleObject;
}

module.exports = convertToObject;
