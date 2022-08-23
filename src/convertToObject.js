'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const finalObj = {};

  sourceString
    .split(';')
    .filter(element => element.trim().length)
    .map(element => {
      const splited = element.split(':');

      finalObj[splited[0].trim()] = splited[1].trim();
    });

  return finalObj;
}

module.exports = convertToObject;
