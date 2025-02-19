'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .filter((styleItem) => styleItem.length > 3)
    .map((indStyle) => indStyle.split(':').map((objEntry) => objEntry.trim()));

  const stylesObject = {};

  stylesArray.forEach(
    (styleItem) => (stylesObject[styleItem[0]] = styleItem[1]),
  );

  return stylesObject;
}

module.exports = convertToObject;
