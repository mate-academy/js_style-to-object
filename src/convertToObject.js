'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStyles = sourceString
    .split(';')
    .filter(item => item.trim())
    .map(style => style
      .split(':')
      .map(item => item.trim()));

  return arrayOfStyles.reduce((obj, [key, value]) => {
    obj[key] = value;

    return obj;
  }, {});
}

module.exports = convertToObject;
