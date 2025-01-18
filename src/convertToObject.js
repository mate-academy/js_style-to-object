'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  sourceString
    .trim()
    .split(';')
    .map((cssString) => {
      if (!cssString) {
        return;
      }

      const cssPropertyAndValue = cssString
        .split(':')
        .map((correctPropertyAndValue) => correctPropertyAndValue.trim());

      resultObject[cssPropertyAndValue[0]] = `${cssPropertyAndValue[1]}`;
    });

  for (const key in resultObject) {
    if (key === '') {
      delete resultObject[key];
    }
  }

  return resultObject;
}

module.exports = convertToObject;
