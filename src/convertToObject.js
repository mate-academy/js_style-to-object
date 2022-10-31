'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleArr = sourceString
    .replace(/\n/g, '')
    .split(';')
    .filter(property => property.includes(':'));

  return styleArr.reduce(styleArrToObj, {});
}

function styleArrToObj(prev, current) {
  const [key, value] = current.split(':');

  return {
    ...prev,
    [key.trim()]: value.trim(),
  };
}

module.exports = convertToObject;
