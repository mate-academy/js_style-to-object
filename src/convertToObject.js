'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const transformedString = sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .reduce((acc, element) => {
      const splitedEl = element.split(':').map((el) => el.trim());

      acc[splitedEl[0]] = splitedEl[1];

      return acc;
    }, {});

  return transformedString;
}

module.exports = convertToObject;
