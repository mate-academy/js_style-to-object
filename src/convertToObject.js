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
    const index = el.indexOf(':');
    const key = el.slice(0, index).trim();
    const value = el.slice(index + 1).trim();

    obj[key] = value;

    return obj;
  };

  const sourceObj = sourceArr.reduce(callback, {});

  return sourceObj;
}

module.exports = convertToObject;
