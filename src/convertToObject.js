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
  const repN = sourceString.replace(/\r?\n/g, '');
  const arrStr = repN.split(';');

  const arrFiltered = arrStr.map(item => item.trim())
    .filter(item => item !== '');
  const obj = arrFiltered.reduce((acc, item) => {
    const indDots = item.indexOf(':');
    const key = item.slice(0, indDots).trim();
    const val = item.slice(indDots + 1).trim();

    return {
      ...acc, [key]: val,
    };
  }, {});

  return obj;
}

module.exports = convertToObject;
