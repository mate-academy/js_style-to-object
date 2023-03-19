'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see
 * an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const mainObj = {};

  sourceString
    .split('\n')
    .filter(string => string.length > 5)
    .map((el) => {
      const string = el.split(':');

      return string
        .map(part => part.trim())
        .reduce((key, vlues) => {
          const obj = {};

          obj[key] = vlues.slice(0, -1).trim();

          return obj;
        });
    })
    .map(obj => Object.assign(mainObj, obj));

  return mainObj;
}

module.exports = convertToObject;
