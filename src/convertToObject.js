'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 * with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values
 * of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString
    .split('  ')
    .filter(element => element !== ' ')
    .join('')
    .split('\n');

  const callback = (prev, item) => {
    const indexOfColon = item.indexOf(':');

    const key = item.slice(0, indexOfColon).trim();
    const value = item.slice(indexOfColon + 1, -1).trim();

    return indexOfColon === -1
      ? { ...prev }
      : Object.assign(prev, { [key]: value });
  };

  return sourceArr.reduce(callback, {});
}

module.exports = convertToObject;
