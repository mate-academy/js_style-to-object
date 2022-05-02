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
  const res = {};
  const arr = sourceString
    .replace(/\s{2,}|^\s/g, '')
    .split(';')
    .filter(a => a.length > 2);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim().replace(/\s(?=:)|^\s/gm, '');
    res[arr[i].match(/.+(?=:)/g)[0]] = (arr[i].match(/(?<=:).+/g)[0]).trim();
  }

  return res;
}

module.exports = convertToObject;
