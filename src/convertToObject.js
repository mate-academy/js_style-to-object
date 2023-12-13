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
  const convertObject = {};
  const arrString = sourceString.split(';');

  arrString.forEach((element) => {
    const arr = element.replace(/\n/g, '').split(':');

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    if (arr[0] !== '') {
      convertObject[arr[0]] = arr[1];
    }
  });

  return convertObject;
}

module.exports = convertToObject;
