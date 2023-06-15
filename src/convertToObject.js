'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');
  const styles = {};

  sourceArray.forEach((item) => {
    const [key, value] = item.split(':');

    if (!key || !value) {
      return;
    }

    styles[normalized(key)] = normalized(value);
  });

  return styles;
}

function normalized(value) {
  return value.trim();
}

module.exports = convertToObject;
