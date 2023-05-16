'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';');

  const stylesObject = stylesArray.reduce((obj, style) => {
    const trimmedStyle = style.trim();

    if (trimmedStyle !== '') {
      const [property, value] = trimmedStyle.split(':');

      obj[property.trim()] = value.trim();
    }

    return obj;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
