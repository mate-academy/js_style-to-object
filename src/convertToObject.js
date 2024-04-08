'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .filter((style) => style.trim().length !== 0)
    .reduce((acc, current) => {
      const [key, value] = current.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
