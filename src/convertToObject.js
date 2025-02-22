'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssObject = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => {
      const colonIndex = item.indexOf(':');
      const futureKey = item.slice(0, colonIndex).trim();
      const futureValue = item.slice(colonIndex + 1).trim();

      return [futureKey, futureValue];
    })
    .reduce((accumulator, propertyValuePair) => {
      accumulator[propertyValuePair[0]] = propertyValuePair[1];

      return accumulator;
    }, {});

  return cssObject;
}

module.exports = convertToObject;
