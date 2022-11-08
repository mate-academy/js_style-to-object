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
  return sourceString
    .replace(/\s\s+/g, ' ')
    .split(';')
    .filter(style => style.includes(':'))
    .reduce(createObject, {});
}

const createObject = (prev, style) => {
  const copyStyle = style.split(':');

  prev[copyStyle[0].trim()] = copyStyle[1].trim();

  return prev;
};

module.exports = convertToObject;
