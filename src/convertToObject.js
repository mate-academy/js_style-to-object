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
  const properties = {};
  const sourceStringsNoSpaces = [];

  for (const item of sourceString) {
    if (item.replace(/\n/g, '')) {
      sourceStringsNoSpaces.push(item);
    }
  }

  const propertiesArray
    = sourceStringsNoSpaces.join('').split(';').filter(a => (
      a.length > 2
    ));
  const keysAndValuesProperties
    = propertiesArray.map(a => a.split(':')).map(a => (
      a.map(b => b.trim())
    ));

  for (const item of keysAndValuesProperties) {
    properties[item[0]] = item[1];
  }

  return properties;
}

module.exports = convertToObject;
