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
  if (!sourceString) {
    return Error('source string is empty or null');
  }

  const objectCss = sourceString
    .split(';')
    .map(item => item
      .split(':')
      .map(value => value.trim())
      .filter(trimedValue => trimedValue !== ''))
    .map(item => item)
    .filter(item => item.length !== 0)
    .reduce((object, item) => {
      object[item[0]] = item[1];

      return object;
    }, {});

  return objectCss;
}

module.exports = convertToObject;
