'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';').filter(i => i.trim() !== '');
  const result = arr.reduce((obj, item) => {
    const [key, value] = item.split(':').map((str) => str.trim());

    obj[key] = value;

    return obj;
  }, {});

  return result;
}

module.exports = convertToObject;
