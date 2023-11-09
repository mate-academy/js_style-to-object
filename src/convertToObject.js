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
  const cssStyled = {};

  const arrFromString = sourceString.split(';')
    .map(el => el.trim())
    .filter(element => element.length > 0);

  const splitedArray = arrFromString.map(el => el.split(':'));

  const trimmedArray = splitedArray.map(el => el.map(x => x.trim()));

  trimmedArray.forEach(([key, value]) => {
    cssStyled[key] = value;
  });

  return cssStyled;
}

module.exports = convertToObject;
