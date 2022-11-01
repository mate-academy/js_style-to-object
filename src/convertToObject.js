'use strict';

/**
 * Implement convertToObject function:
 *
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectsStyles = sourceString
    .split(';')
    .map(style => style
      .split(':')
      .map(styleOne => styleOne.trim()))
    .filter(style => style.length > 1);

  return Object.fromEntries(objectsStyles);
}

module.exports = convertToObject;
