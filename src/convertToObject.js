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
  const stylesArray = sourceString.split(';')
    .filter(style => style.includes(':'));

  const stylesObj
  = stylesArray.reduce((prev, curr) => {
    const property = curr.split(':');

    prev[property[0].trim()] = property[1].trim();

    return prev;
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
