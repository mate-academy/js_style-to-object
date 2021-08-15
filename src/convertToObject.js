'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfSymbols = sourceString.split('').filter(x => x !== '\n');

  function callback(sum, x) {
    return sum + x;
  }

  const arrayOfStylesWithValue = arrayOfSymbols.reduce(callback, '').split(';');
  const secondaryArrays = arrayOfStylesWithValue.map(x => x.split(':'));
  const formatingOfStyles = secondaryArrays.map(x => x.map(y => y.trim()));
  const filterOfEmptyArrays = formatingOfStyles.filter(x => !x.includes(''));

  function sumInObj(sum, a) {
    return {
      ...sum,
      [a[0]]: a[1],
    };
  }

  const objectOfStyles = filterOfEmptyArrays.reduce(sumInObj, {});

  return objectOfStyles;
}

module.exports = convertToObject;
