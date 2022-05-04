'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
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
  const inpArr = sourceString.split(':').map(x => x.trim()).join(':')
    .split(';').map(x => x.trim()).filter(x => x !== '');

  for (let i = 0; i < inpArr.length; i++) {
    const el = inpArr[i].split(':');

    obj[el[0]] = el[1];
  }

  return obj;
}

module.exports = convertToObject;
