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
  const stringToArray = sourceString.split(';').map(v => v.trim());
  const arrayWithinArray
  = stringToArray.map(v => v.split(':').map(s => s.trim()));

  return arrayWithinArray.reduce((result, array) => {
    const [rawKey, value] = array;

    if (rawKey && value) {
      const filteredKey = rawKey.split('\n').filter(v => v.length > 0);
      const finalKey = filteredKey.join(' ').trim();

      if (finalKey.length > 0) {
        result[finalKey] = value;
      }
    }

    return result;
  }, {});
}

module.exports = convertToObject;
