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
  const stylesArr = sourceString.split(';')
    .map(style => style.trim().split(':'))
    .filter(style => style.length === 2);

  const callback = (prev, current) => {
    return {
      ...prev,
      [current[0].trim()]: current[1].trim(),
    };
  };

  const stylesObj = stylesArr.reduce(callback, {});

  return stylesObj;
}

module.exports = convertToObject;
