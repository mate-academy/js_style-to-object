'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = sourceString
    .split('\n')
    .filter((string) => string.length > 3)
    .map((string) => {
      const result = string.split(':');

      return result;
    })
    .reduce((prev, masiv) => {
      const newM = [];

      for (const key in masiv) {
        const str = masiv[key];
        const stringWithoutSpaces = str.trim();

        newM.push(stringWithoutSpaces);
      }

      const first = newM[0];
      const second = newM[1];
      const x = second.slice(0, -1);
      const y = x.trim();

      return {
        ...prev,
        [first]: y,
      };
    }, {});

  return newObj;
}

module.exports = convertToObject;
