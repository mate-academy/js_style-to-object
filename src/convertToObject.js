'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  let pairs = sourceString.split(';');

  pairs = pairs.map((x) => x.trim()).filter((x) => x.length > 0);

  const toCss = function(x) {
    let pair = x.split(':');

    pair = pair.map((a) => a.trim());

    result[pair[0]] = pair[1];
  };

  pairs.forEach(toCss);

  return result;
}

module.exports = convertToObject;
