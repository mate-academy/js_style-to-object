'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitByPropertyes = sourceString.split(';');
  const filterEmpty = splitByPropertyes.filter(str => str.trim().length > 0);
  const entries = filterEmpty.map(prop => prop.split(':'));
  const trimEnties = entries.map(prop => prop.map(val => val.trim()));

  const obj = Object.fromEntries(trimEnties);

  return obj;
}
module.exports = convertToObject;
