'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObject = {};

  const styleArray = sourceString
    .trim()
    .split(';')
    .map((style) => style.trim())
    .filter(Boolean);

  styleArray.forEach((style) => {
    const [key, value] = style.split(':').map((part) => part.trim());

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
