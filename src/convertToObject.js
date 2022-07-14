'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';')
    .map(element => element.trim().split(':'))
    .filter(arr => arr.length > 1);

  const callback = (acc, element) =>
    ({
      ...acc, [element[0].trim()]: element[1].trim(),
    });

  const style = sourceArray.reduce(callback, {});

  return style;
}

module.exports = convertToObject;
