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
      const [cssName, cssValue] = style.split(':');

      result[cssName.trim()] = cssValue.trim();
    });

  return result;
}

module.exports = convertToObject;
