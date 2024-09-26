'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 *
 */
const removeSpaces = (str) => str.trim();

function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map(removeSpaces)
    .filter((str) => str.length > 0)
    .reduce((styles, style) => {
      const propStyle = style.split(':').map(removeSpaces);
      const [prop, value] = propStyle;

      styles[prop] = value;

      return styles;
    }, stylesObject);

  return stylesObject;
}
module.exports = convertToObject;
