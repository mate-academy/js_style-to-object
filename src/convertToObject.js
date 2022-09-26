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
  const splitArr = sourceString.split(';');

  const cleanArr = splitArr.filter(key => key.length > 5);

  return cleanArr.reduce((total, prop) => {
    const key = prop.split(':');

    total[key[0].trim()] = (key[1].trim());

    return total;
  }, {});
}

module.exports = convertToObject;
