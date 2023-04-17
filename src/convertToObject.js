'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObj = {};
  let arrOfStyles = sourceString.replace(/[\r\n]+/g, '').split(';');

  arrOfStyles = arrOfStyles.map((str) => str.trim().split(':'));

  arrOfStyles.forEach(([key, value]) => {
    if (key !== '') {
      styleObj[key.trim()] = value.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
