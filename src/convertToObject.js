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
  const sourceArray = sourceString
    .split(';')
    .filter(style => style.includes(':') && style.length > 1);

  return sourceArray.reduce((resultObject, style) => {
    const [key, value] = style.split(':');

    resultObject[key.trim()] = value.trim();

    return resultObject;
  }, {});
}

module.exports = convertToObject;
