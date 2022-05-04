'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const obj = {};

  arr.forEach(element => {
    const elem = element.split(':');

    if (elem[0] && elem[1]) {
      obj[elem[0].trim()] = elem[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
