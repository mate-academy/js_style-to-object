'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are
 * the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split('\n');
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const trimmedStyle = style.trim();

    if (trimmedStyle === '') {
      return;
    }

    const [property, value] = trimmedStyle.split(':');

    if (value) {
      const trimmedValue = value.trim();

      const valueWithoutSemicolon = trimmedValue.endsWith(';')
        ? trimmedValue.slice(0, -1).trim()
        : trimmedValue;

      stylesObject[property.trim()] = valueWithoutSemicolon;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
