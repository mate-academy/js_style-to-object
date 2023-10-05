'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const arrayWithEachStyle = sourceString.split(';');
  const clearArrayWithEachStyle = [];

  arrayWithEachStyle.forEach((element) =>
    clearArrayWithEachStyle.push(element.trim().split('/n').join()));

  for (const eachStyle of clearArrayWithEachStyle) {
    if (eachStyle.length !== 0) {
      const someStyle = eachStyle.split(':');

      stylesObject[`${someStyle[0]}`.trim()] = `${someStyle[1]}`.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
