'use strict';

/*
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectResult = {};
  const additional = sourceString.split(';');

  for (const key of additional) {
    let title = '';

    title = key.trim();

    if (title !== '') {
      const num = title.indexOf(':');
      const property = (title.slice(num + 1, title.length)).trim();

      title = (title.slice(0, num)).trim();

      objectResult[title] = property;
    }
  }

  return objectResult;
};

module.exports = convertToObject;
