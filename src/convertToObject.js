'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 * with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the
 *  values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleInObject = {};

  sourceString
    .split(';')
    .filter(param => param.trim())
    .map(items => {
      const arrayItem = items.split(':');

      styleInObject[arrayItem[0].trim()] = arrayItem[1].trim();
    });

  return styleInObject;
}

module.exports = convertToObject;
