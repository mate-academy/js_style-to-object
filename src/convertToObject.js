'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedString = sourceString
    .split(';')
    .filter((style) => style.trim())
    .reduce((prev, element) => {
      const [property, value] = element.split(':').map((el) => el.trim());

      prev[splittedStyle[0]] = splittedStyle[1];

      return prev;
    }, {});

  return convertedString;
}

module.exports = convertToObject;
