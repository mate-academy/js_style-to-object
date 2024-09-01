'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  const complexStylesObj = styleDeclarations
    .map((el) => el.trim())
    .filter((el) => el !== '')
    .reduce((acc, style) => {
      const [property, value] = style.split(':').map((str) => str.trim());

      if (property) {
        acc[property] = value;
      }

      return acc;
    }, {});

  return complexStylesObj;
}

module.exports = convertToObject;
