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
  const styleArr = sourceString.split(';');
  const res = {};

  styleArr.forEach((element) => {
    const colon = element.indexOf(':');
    const el1 = element.slice(0, colon).trim();
    const el2 = element.slice(colon + 1).trim();

    if (el1 && el2) {
      res[el1] = el2;
    }
  });

  return res;
}

module.exports = convertToObject;
