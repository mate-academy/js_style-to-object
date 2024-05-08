'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const sourceObject = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0)
    .reduce((acc, current) => {
      const [property, value] = current.split(':');

      acc[property.trim()] = value.trim();

      return acc;
    }, {});

  return sourceObject;
}

module.exports = convertToObject;
