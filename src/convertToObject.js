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
  const resultObjStyles = {};
  const arrKeyValue = sourceString.split(';').map(el => el.trim());

  for (let i = 0; i < arrKeyValue.length; i++) {
    const currentItem = arrKeyValue[i];
    const [key, value] = currentItem.split(':');

    if (key.trim()) {
      resultObjStyles[key.trim()] = value.trim();
    }
  }

  return resultObjStyles;
}

module.exports = convertToObject;
