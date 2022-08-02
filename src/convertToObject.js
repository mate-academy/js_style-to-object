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

  const splited = sourceString.split(';').map(elem => elem.split(':'));

  const withoutEmpty = splited.filter(elem => elem.length !== 1);

  const trimed = withoutEmpty.map(elem => elem.map(item => item.trim()));

  for (const elem of trimed) {
    result[elem[0]] = elem[1];
  }

  return result;
}

module.exports = convertToObject;
