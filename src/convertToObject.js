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
  const sourceArray = sourceString.split(';');

  const cleanedArray = sourceArray.map(e => {
    const separator = e.indexOf(':');
    const key = e.slice(0, separator).trim();
    const value = e.slice(separator + 1).trim();

    return [key, value];
  });

  const object = cleanedArray.reduce((acc, item) => {
    const key = item[0];
    const value = item[1];

    acc[key] = value;

    return acc;
  }, {});

  // if we have some empty key we need to delete it
  delete object[''];

  return object;
}

module.exports = convertToObject;
