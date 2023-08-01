'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');

  const stylesObj = properties.reduce((prev, item) => {
    const [key, value] = item.split(':').map(x => x.trim());

    if (value) {
      prev[key] = value;
    }

    return prev;
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
