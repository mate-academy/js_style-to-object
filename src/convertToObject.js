'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
* and values are the values of related CSS
 properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const splitString = sourceString.split(';').map(elem => elem.split(':'));

  const delEpmty = splitString.filter(elem => elem.length !== 1);

  const delSpaces = delEpmty.map(elem => elem.map(item => item.trim()));

  delSpaces.map(elem => {
    result[elem[0]] = elem[1];
  });

  return result;
}

module.exports = convertToObject;
