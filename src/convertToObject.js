'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const STRING_SEPARATOR = ';';
  const KEY_VALUE_SEPARATOR = ':';
  const stylesArray = sourceString.trim().split(STRING_SEPARATOR);

  const stylesObject = stylesArray.reduce((acc, style) => {
    const [key, value] = style.split(KEY_VALUE_SEPARATOR);

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
