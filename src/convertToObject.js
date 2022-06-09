'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStyles = sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string.length !== 0);

  const objectOfStyles = arrayOfStyles.reduce((prevObj, cssProperty) => {
    const [objKey, objValue] = cssProperty.split(':');

    return {
      ...prevObj,
      [objKey.trim()]: objValue.trim(),
    };
  }, {});

  return objectOfStyles;
}

module.exports = convertToObject;
