'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString
    .split(';')
    .map((property) => property.trim())
    .filter((property) => property.length)
    .map((property) => {
      return property.split(':').map((style) => style.trim());
    });

  return cssProperties.reduce((styles, property) => {
    return { ...styles, [property[0]]: property[1] };
  }, {});
}

module.exports = convertToObject;
