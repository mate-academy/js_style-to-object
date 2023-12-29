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
  const stylesArray = sourceString.split('\n');

  const stylesObject = stylesArray.reduce((acc, line) => {
    const [key, ...values] = line.split(':').map(part => part.trim());

    if (key && values.length > 0) {
      const value = values.join(':').replace(/\s*;*\s*$/, '');

      acc[key] = value;
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
