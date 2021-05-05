'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};

  sourceString
    .split(';')
    .forEach((style, ind, arr) => {
      const property = style
        .split(':')
        .map(elem => elem.trim());

      stylesObj[property[0]] = property[1];
    });

  delete stylesObj[''];

  return stylesObj;
}

module.exports = convertToObject;
