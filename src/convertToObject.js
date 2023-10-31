'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString.split('\n')
    .filter(elem => elem.trim().length > 1)
    .map(deleteSpace)
    .reduce((acc, curr) => {
      let parts = curr.split(':');

      parts = parts.map(part => part.trim());
      acc[parts[0]] = parts[1];

      return acc;
    }, {});

  function deleteSpace(word) {
    let res = '';

    for (const ch of word) {
      if (!ch.includes(';')) {
        res += ch;
      }
    }

    return res.trim();
  }
}

module.exports = convertToObject;
