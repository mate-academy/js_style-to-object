'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const createKeyValueList = style => {
    const separetedKeyValue = style.split(':');

    return [separetedKeyValue[0].trim(), separetedKeyValue[1].trim()];
  };

  const stylesValues = sourceString
    .split(';')
    .filter(style => style.trim().length > 0)
    .map(createKeyValueList);

  const stylesObject = Object.fromEntries(stylesValues);

  return stylesObject;
}

module.exports = convertToObject;
