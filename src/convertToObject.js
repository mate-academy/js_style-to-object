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
  const stringsObject = {};
  const subStrings
    = sourceString.split(';').filter(
      item => item.includes(':') && item.length > 1);

  for (let i = 0; i < subStrings.length; i++) {
    const key = subStrings[i].split(':')[0];
    const property = subStrings[i].split(':')[1];

    stringsObject[key.trim()] = property.trim();
  }

  return stringsObject;
}

module.exports = convertToObject;
