'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .filter((style) => style.trim())
    .map((style) => {
      const [property, value] = style.split(':');

      return [property.trim(), value.trim()];
    })
    .reduce((acc, [property, value]) => {
      acc[property] = value;

      return acc;
    }, {});

  return stylesArray;
}

module.exports = convertToObject;
