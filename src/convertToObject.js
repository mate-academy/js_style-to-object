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
  const filteredProperties = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property.length);

  return filteredProperties.map(property => property.split(':')
    .map(el => el.trim()))
    .reduce((objectConvert, pair) => {
      return Object.assign(objectConvert, { [pair[0]]: pair[1] });
    }, {});
}

module.exports = convertToObject;
