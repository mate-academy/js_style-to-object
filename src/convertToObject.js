'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .trim()
    .split(';')
    .map(style => style.trim())
    .filter(Boolean)
    .map(style => style.split(':').map(part => part.trim()));

  const stylesObject = {};

  stylesArray.forEach(([property, value]) => {
    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
