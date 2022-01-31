'use strict';

/**
 * Implement convertToObject function:
 *
<<<<<<< HEAD
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
=======
 * Function takes a string with styles
(see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
>>>>>>> be580c2 (Update convertToObject.js)
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';');
  const obj = array.reduce((prev, item) => {
    const separator = item.indexOf(':');
    const key = item.slice(0, separator).trim();
    const value = item.slice(separator + 1).trim();

    prev[key] = value;

    return prev;
  }, {});

  delete obj[''];

  return obj;
}

module.exports = convertToObject;
