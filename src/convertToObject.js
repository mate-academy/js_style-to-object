'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
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
  const properties = sourceString.split(';');

  const correctProperties = properties.map(el => {
    return el.split('\n').join('').trim()
      .split(':').map(value => value.trim()).join(': ');
  });

  correctProperties.forEach(el => {
    const splitProperties = el.split(': ');

    if (el) {
      obj[splitProperties[0]] = splitProperties[1];
    }
  });

  return obj;
}

module.exports = convertToObject;
