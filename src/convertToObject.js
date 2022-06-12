'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 * example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString
    .split(';')
    .filter(item => item.includes(':'));

  const callback = (prev, prop) => {
    const [key, value] = prop.split(':');

    return {
      ...prev,
      [key.trim()]: value.trim(),
    };
  };

  return stylesArr.reduce(callback, {});
}

module.exports = convertToObject;
