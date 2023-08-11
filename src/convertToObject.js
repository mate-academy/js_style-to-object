'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const formatedStyles
  = sourceString
    .split(';')
    .map(style =>
      style
        .split(':')
        .map(stylePart => stylePart.trim())
    )
    .filter(style =>
      style.length === 2);

  formatedStyles.forEach(([key, value]) => {
    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
