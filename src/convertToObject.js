'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((style) => style.trim())
    .reduce((acc, currentStyle) => {
      const [key, value] = currentStyle.split(':').map((str) => str.trim());

      acc[key] = value;

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
