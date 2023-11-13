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
  const styledObject = {};
  const sheets = sourceString.split(';');

  sheets.forEach((sheet) => {
    const [style, value] = sheet.split(':');

    if (style !== undefined && value !== undefined) {
      const finalKey = style.trim();
      const finalValue = value.trim();

      if (finalKey && finalValue) {
        styledObject[finalKey] = finalValue;
      }
    }
  });

  return styledObject;
}

module.exports = convertToObject;
