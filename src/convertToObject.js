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
  const arrFromStr = sourceString
    .trim()
    .split('\n')
    .filter(item => item.includes(':'))
    .map(str => {
      const item = deleteSymb(str, ';');

      let [prop, value] = item.split(':');

      prop = prop.trim();
      value = value.trim();

      return [prop, value];
    });

  const objFromArr = {};

  for (const [key, value] of arrFromStr) {
    objFromArr[String(key)] = value;
  }

  return objFromArr;
}

function deleteSymb(str, symb) {
  const arr = str
    .split('')
    .filter(char => char !== symb);

  return arr.join('');
}

module.exports = convertToObject;
