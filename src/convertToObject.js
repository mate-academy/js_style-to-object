'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .map((element) => element.trim());

  const pairs = sourceArray
    .map((element) => {
      const [key, value] = element.split(':').map((part) => part.trim());
      return key && value ? [key, value] : null;
    })
    .filter((pair) => pair);

  const objectResult = {};

  pairs.forEach(([key, value]) => {
    objectResult[key] = value;
  });

  return objectResult;
}

module.exports = convertToObject;
