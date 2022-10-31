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
  const strStyle = sourceString.split(';').map(item => item.trim())
    .filter(item => item !== '');

  let arrStyle, key, value;

  const objStyle = strStyle.reduce((acc, item) => {
    arrStyle = item.split(':');
    key = arrStyle[0].trimEnd();
    value = arrStyle[1].trimStart();

    return {
      ...acc, [key]: value,
    };
  }, {});

  return objStyle;
}

module.exports = convertToObject;
