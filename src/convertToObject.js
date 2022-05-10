'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exa
 * mpl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayFromSourceString = sourceString
    .split(';').map(x => x.split(':'));

  const result = {};

  arrayFromSourceString.forEach(element => {
    if (element.length === 2) {
      result[element[0].trim()] = element[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
