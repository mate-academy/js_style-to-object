'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
   (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
   (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssPropertyRegex = new RegExp(/(\S.+\s*):(\s*.+);/g);
  const matches = sourceString.matchAll(cssPropertyRegex);
  const stylesObject = {};

  for (const [, property, value] of matches) {
    stylesObject[property.trim()] = value.trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
