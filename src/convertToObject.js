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
  const arr = sourceString.split(';');

  const obj = arr.reduce((accumulator, element) => {
    // const separator = element.indexOf(':');
    // const key = element.slice(0, separator).trim();
    // const value = element.slice(separator + 1).trim();

    const [key, value] = element.split(':').map(text => text.trim());

    if (key) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});

  return obj;
}

module.exports = convertToObject;
