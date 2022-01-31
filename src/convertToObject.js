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
  // write your code here
  const modifyString = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(el => el !== '');

  const propertys = {};

  modifyString.forEach(words => {
    const [property, value] = words
      .split(':')
      .map(word => word.trim());

    propertys[property] = value;
  });

  return propertys;
}

module.exports = convertToObject;
