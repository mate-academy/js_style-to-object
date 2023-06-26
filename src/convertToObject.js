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
  const convertToArray = sourceString
    .split(';')
    .filter(item => item.length > 4);

  return convertToArray.reduce((prev, item) => {
    return {
      ...prev, [objectKey(item)]: objectKeyValue(item),
    };
  }, {});
}

function objectKey(string) {
  const sumbolIndex = string.indexOf(':');

  return string.slice(0, sumbolIndex).trim();
}

function objectKeyValue(string) {
  const sumbolIndex = string.lastIndexOf(':');

  return string.slice(sumbolIndex + 1).trim();
}

module.exports = convertToObject;
