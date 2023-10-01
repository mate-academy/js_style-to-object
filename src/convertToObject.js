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
  const newObj = {};

  const arraySource = sourceString.split(';');

  for (let i = 0; i < arraySource.length - 1; i++) {
    const keysPush = arraySource[i].split(':')
      .map(str => str.trimEnd().trimStart());

    if (keysPush.length > 1) {
      newObj[keysPush[0]] = keysPush[1];
    }
  }

  return newObj;
}

module.exports = convertToObject;
