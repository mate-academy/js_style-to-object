'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((property) => property
      .trim()
      .split(':')
      .map((word) => word.trim()))
    .filter((isNotSpace) => isNotSpace.length > 1);
  const objectOfStyles = {};

  for (const property of styles) {
    objectOfStyles[property[0]] = property[1];
  }

  return objectOfStyles;
}

module.exports = convertToObject;
