'use strict';

/**
* Implement convertToObject function:
*
* Function takes a string with styles
 (see an example in [stylesString.js](./stylesString.js))
* and returns an object where CSS properties are keys
* and values are the values of related CSS properties
 (see an exampl in [test file](./convertToObject.test.js))
*
* @param {string} sourceString
*
* @return {object}
*/
function convertToObject(styles) {
  const srt = styles.split(';');

  const result = {};

  for (let i = 0; i < srt.length; i++) {
    const parts = srt[i].split(':');

    if (parts[0] && parts[1]) {
      result[parts[0].trim()] = parts[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
