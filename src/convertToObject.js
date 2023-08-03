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
  const stylesList = sourceString.split(';').filter(v => v.trim());

  const stylesObj = stylesList.reduce((prev, style) => {
    const [key, value] = style.split(':');

    prev[key.trim()] = value.trim();

    return prev;
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
