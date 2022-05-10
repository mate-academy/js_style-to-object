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
  const arrOfSource = sourceString.split(';');
  const newObj = {};

  arrOfSource.forEach(element => {
    if (element.trim()) {
      const objKey = element.split(':')[0].trim();
      const keyValue = element.split(':')[1].trim();

      newObj[objKey] = keyValue;
    }
  });

  return newObj;
}

module.exports = convertToObject;
