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
const PROPERTY_SEPARATOR = ';';
const KEY_SEPARATOR = ':';

function convertToObject(sourceString) {
  const styleList = sourceString
    .split(PROPERTY_SEPARATOR)
    .reduce((acc, prop) => {
      const line = prop.trim().split(KEY_SEPARATOR);

      if (line[0] !== '') {
        acc[line[0].trim()] = line[1].trim();
      }

      return acc;
    }, {});

  return styleList;
}

module.exports = convertToObject;
