'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strSplit = sourceString.split('\n').join('').split(';')
    .filter(x => x.indexOf(':') > -1);
  const newObj = {};

  strSplit.forEach((x, i) => {
    const xSplit = x.split(':');

    newObj[xSplit[0].trim()] = xSplit[1].trim();
  });

  return newObj;
}

module.exports = convertToObject;
