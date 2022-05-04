'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrayWithPartOfSourceString = sourceString
    .replace(/\s{2,}|^\s/g, '')
    .split(';')
    .filter(element => element.length > 2);

  arrayWithPartOfSourceString.forEach(element => {
    element.trim().replace(/\s(?=:)|^\s/gm, '');

    result[element.match(/.+(?=:)/g)[0]]
    = (element.match(/(?<=:).+/g)[0]).trim();
  });

  return result;
}

module.exports = convertToObject;
