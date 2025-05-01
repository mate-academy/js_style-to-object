'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  stylesArray.forEach((arrayItem) => {
    const trimmedItem = arrayItem.trim();

    if (!trimmedItem || !trimmedItem.includes(':')) {
      return;
    }

    const sliceIndex = trimmedItem.indexOf(':');
    const property = trimmedItem.slice(0, sliceIndex).trim();
    const value = trimmedItem.slice(sliceIndex + 1).trim();

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
