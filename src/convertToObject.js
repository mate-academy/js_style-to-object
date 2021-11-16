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
  const arr = sourceString.split(';');
  const arrItem = arr.map(item => item.split('')
    .filter(i => i !== '\n' && i !== '')
    .join('').split(':')
    .map(a => a.trim())
    .filter(b => b !== ''));
  const obj = arrItem.reduce((prev, item) => {
    if (item.length > 1) {
      prev[item[0]] = item[1];
    }

    return prev;
  }, {});

  return obj;
}

module.exports = convertToObject;
