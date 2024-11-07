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
    .reduce((acc, curr) => {
      const [key, value] = curr.split(':').map((str) => str.trim());

      acc[key] = value;

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
