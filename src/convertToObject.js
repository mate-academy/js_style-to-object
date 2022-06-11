'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectCss = {};
  const arrOfString = sourceString.split(';')
    .map(element => element.split(':')).filter(property => property.length > 1)
    .map(element => element.map(subelement => subelement.trim()));

  arrOfString.map(key => (objectCss[key[0]] = key[1]));

  return objectCss;
}

module.exports = convertToObject;
