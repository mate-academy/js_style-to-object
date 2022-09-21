'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString
    .split(';')
    .map(item => item
      .trim()
      .split(':')
      .map(el => el.trim())
    )
    .filter(item => item.length > 1);

  const stylesObj = stylesArr.reduce((accumulator, property) => {
    return {
      ...accumulator,
      [property[0]]: property[1],
    };
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
