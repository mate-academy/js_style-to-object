'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related[test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splited = sourceString.split(';');
  const splited1 = splited.map(item => item.split(':'));
  const trimed = splited1.map(item => item.map(itm => itm.trim()));
  const filtered = trimed.filter(item => item.every(itm => itm !== ''));
  const rez = {};

  if (splited.length % 2) {
    filtered.forEach(item => {
      rez[item[0]] = item[1];
    });
  }

  return rez;
}

module.exports = convertToObject;
