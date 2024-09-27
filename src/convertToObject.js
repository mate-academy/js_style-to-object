'use strict';

/**
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
