'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString
    .trim()
    .split(';')
    .forEach((el) => {
      const [firstPart, secondPart] = el.split(':').map((part) => part.trim());

      if (firstPart && secondPart) {
        obj[firstPart] = secondPart;
      }
    });

  return obj;
}

module.exports = convertToObject;
