'use strict';

/**
 * Implement convertToObject function:
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const splitedSource = sourceString.split(';');

  splitedSource
    .map((style) => style.trim())
    .filter((style) => style.length > 0)
    .forEach((style) => {
      const splitedArr = style.split(':');

      result[splitedArr[0].trim()] = splitedArr[1].trim();
    });

  return result;
}

module.exports = convertToObject;
