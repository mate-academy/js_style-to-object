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
  const arrayFromSourceString = sourceString.split(';');
  const arrayWithSingleString = arrayFromSourceString.map(item =>
    item.split(':'));
  const deleteSpaces = arrayWithSingleString.map(item =>
    item.map(word => word.trim()));
  const arrWithoutEmpty = deleteSpaces.filter(item => item.length > 1);

  const arrOfObj = arrWithoutEmpty.map(item => Object.assign({}, item));
  const finalObj = arrOfObj.reduce((prev, item) => {
    return {
      ...prev,
      [item[0]]: item[1],
    };
  }, {});

  return finalObj;
}

module.exports = convertToObject;
