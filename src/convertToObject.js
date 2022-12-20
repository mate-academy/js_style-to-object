'use strict';

// const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 *  and returns an object where CSS properties are keys
 *  and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringToArray = sourceString.split('\n');
  const callback = (prev, item) => {
    const separator = item.indexOf(':');

    if (separator !== -1) {
      const key = item.slice(0, separator).trim();
      const value = item.slice(separator + 1, item.length - 1).trim();

      return {
        ...prev,
        [key]: value,
      };
    }

    return { ...prev };
  };
  const result = sourceStringToArray.reduce(callback);

  return result;
}

module.exports = convertToObject;
