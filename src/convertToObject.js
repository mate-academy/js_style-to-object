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
  const sourceArray = sourceString.split(';');
  const filtered = sourceArray.filter(item => item.includes(':'));

  const arr = filtered.map((item) => {
    const [key, value] = item.split(':');

    return [key.trim(), value.trim()];
  });

  const callback = (prev, item) => {
    return {
      ...prev,
      [item[0]]: item[1],
    };
  };

  const obj = arr.reduce(callback, {});

  return obj;
}

module.exports = convertToObject;
