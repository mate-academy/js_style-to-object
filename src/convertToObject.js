'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keys = [];
  const values = [];
  const stylesCss = {};
  let startKey = 0;

  for (let i = 0; i < sourceString.length; i++) {
    if (sourceString[i] === ':') {
      keys.push(sourceString.slice(startKey, i).trim());
    }

    if (sourceString[i] === ';') {
      startKey = i + 1;
    }
  }

  let endValue = sourceString.lastIndexOf(';');

  for (let j = sourceString.length; j > 0; j--) {
    if (sourceString[j] === ';') {
      endValue = j;
    }

    if (sourceString[j] === ':') {
      values.push(sourceString.slice(j + 1, endValue).trim());
    }
  }

  for (let i = 0; i < keys.length; i++) {
    stylesCss[keys[i]] = values[values.length - i - 1];
  }

  return stylesCss;
}

module.exports = convertToObject;
