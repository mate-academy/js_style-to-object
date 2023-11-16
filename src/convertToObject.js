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
  const tmp = sourceString.replace(/\n/g, '').split(';');
  const atributes = [];
  const values = [];

  for (let i = 0; i < tmp.length; i++) {
    const tmp2 = tmp[i].split(':');

    if (tmp2[0] !== undefined && tmp2[1] !== undefined) {
      atributes.push(tmp2[0].trim());
      values.push(tmp2[1].trim());
    }
  }

  const AtributesWithValues = {};

  for (let i = 0; i < atributes.length; i++) {
    AtributesWithValues[atributes[i]] = values[i];
  }

  return AtributesWithValues;
}

module.exports = convertToObject;
