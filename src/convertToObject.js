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
  const newArr = [];
  const result = {};
  const arrStyles = sourceString.split('').filter(element => element !== ''
   && element !== '\n');

  for (let index = 0; index < arrStyles.length; index++) {
    const checkElement = arrStyles[index];

    if (checkElement === ';') {
      const position = arrStyles.indexOf(checkElement);
      const addElement = arrStyles.slice(0, position);

      if (addElement.length > 2) {
        newArr.push(addElement.join(''));
      }
      arrStyles.splice(0, position + 1);
      index = 0;
    };
  }

  for (let index = 0; index < newArr.length; index++) {
    const element = newArr[index].split(':');

    result[element[0].trim()] = element[1].trim();
  }

  return result;
}

module.exports = convertToObject;
