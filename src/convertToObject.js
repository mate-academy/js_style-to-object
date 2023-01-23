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
  const sourceArr = sourceString.split(';')
    .map(el => el.trim())
    .filter(el => el.length > 0);

  const callback = (obj, el) => {
    const elArr = el.split(':');

    obj[elArr[0].trim()] = elArr[1].trim();

    return obj;
  };

  const sourceObj = sourceArr.reduce(callback, {});

  return sourceObj;
}

module.exports = convertToObject;
