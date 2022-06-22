'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 *  in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesFromString = sourceString.split(';');
  const stylesArr = stylesFromString.map(styles => styles.trim().split(':'));
  const filteredArr = stylesArr.filter((arr) => arr.length > 1);
  const callback = (prev, item) => {
    return {
      ...prev,
      [item[0].trim()]: item[1].trim(),
    };
  };
  const result = filteredArr.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
