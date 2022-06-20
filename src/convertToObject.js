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
  const stylesStr = sourceString.split(';');

  const stylesArr = stylesStr.map(styles => styles.trim().split(':'));

  const filteredArr = stylesArr.filter((arr) => arr.length > 1);

  const callback = (prev, current) => ({
    ...prev,
    [current[0].trim()]: current[1].trim(),
  });

  const stylesObject = filteredArr.reduce(callback, {});

  return stylesObject;
}

module.exports = convertToObject;
