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
  let currentKey = '';
  let currentValue = '';
  let indexForSlicing = 1;
  const styleObj = {};

  for (let i = 1; i < sourceString.length; i++) {
    if(sourceString[i] === ':') {
      currentKey = sourceString.slice(indexForSlicing, i).trimLeft();
      indexForSlicing = i + 2;
    } else if (sourceString[i] === ';') {
      currentValue = sourceString.slice(indexForSlicing, i);
      indexForSlicing = i + 2;
      styleObj[currentKey] = currentValue;
    }
  }

  return styleObj;
}

module.exports = convertToObject;
