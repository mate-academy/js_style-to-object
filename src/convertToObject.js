'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrStyles = sourceString
    .split('')
    .filter(element => element !== '' && element !== '\n');

  for (let index = 0; index < arrStyles.length; index++) {
    const checkElement = arrStyles[index];

    if (checkElement === ';') {
      const position = arrStyles.indexOf(checkElement);
      const addElement = arrStyles.slice(0, position);

      if (addElement.length > 2) {
        const element = addElement.join('').split(':');

        result[element[0].trim()] = element[1].trim();
      }
      arrStyles.splice(0, position + 1);
      index = 0;
    };
  }

  return result;
}

module.exports = convertToObject;
