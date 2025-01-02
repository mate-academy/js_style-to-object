'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const regex = /([a-zA-Z-]+)\s*:\s*([^;]+);?/g;
  let match;

  while ((match = regex.exec(sourceString)) !== null) {
    const property = match[1].trim(); // CSS property
    const value = match[2].trim(); // CSS value, including multiline content

    if (property && value) {
      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
