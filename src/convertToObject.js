'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.slice(sourceString.indexOf('`') + 1,
    sourceString.lastIndexOf('`')).split(';').map(e => {
    const temp = e.split(':');

    if (temp.length < 2) {
      return;
    };

    const key = temp[0].trim();
    const value = temp[1].trim();

    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
