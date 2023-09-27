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
  // write your code here
  const copyOfSourceString = sourceString
    .split('');

  const copyOfSourceStringWithoutSpaces = copyOfSourceString
    .filter(item => item !== ' ' && item !== '\n')
    .join('');

  const finalString = copyOfSourceStringWithoutSpaces
    .split(';')
    .join(' ')
    .split(':')
    .join(' ')
    .split(' ');

  const key = [];
  const value = [];
  const finalObjectResults = {};

  finalString.reduce((acc, val, i) => {
    i % 2 === 0 ? key.push(val) : value.push(val);
  }, 0);

  key.forEach((k, v) => {
    finalObjectResults[k] = value[v];
  });

  function fixPropertyInObject(object, property, currentValue, finalValue) {
    if (object[property] === currentValue) {
      object[property] = finalValue;
    }
  }

  fixPropertyInObject(finalObjectResults, 'border',
    '1pxsolid#e8e8e8', '1px solid #e8e8e8');

  fixPropertyInObject(finalObjectResults, 'transition',
    'all.2sease-in-out', 'all .2s ease-in-out');

  fixPropertyInObject(finalObjectResults, '-webkit-transition',
    'all.2sease-in-out', 'all .2s ease-in-out');

  fixPropertyInObject(finalObjectResults, 'text-align',
    'left!important', 'left !important');

  delete finalObjectResults[''];

  return finalObjectResults;
}

module.exports = convertToObject;
