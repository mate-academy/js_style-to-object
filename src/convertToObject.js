'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 *
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const PROPERTY_SEPARATOR = ':';
const LINE_SEPARATOR = ';';

function convertToObject(sourceString) {
  const formatedString = sourceString
    .split(LINE_SEPARATOR)
    .reduce((acc, property) => {
      const [key, value] = property.split(PROPERTY_SEPARATOR);

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  return formatedString;
}

module.exports = convertToObject;
