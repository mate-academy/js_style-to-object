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
  const objStyle = {};

  const arrProp = sourceString.split(';').map(el => el.split(':'));

  const delSpace = arrProp.map(el => el.map(prop => prop.trim()));

  for (const el of delSpace) {
    objStyle[el[0]] = el[1];
  }

  for (const key in objStyle) {
    if (objStyle[key] === undefined) {
      delete objStyle[key];
    }
  }

  return objStyle;
}

module.exports = convertToObject;
