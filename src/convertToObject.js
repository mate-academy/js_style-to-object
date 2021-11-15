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
  const removeSpecialSymbol = sourceString.replace(/;/g, ' ');
  const splitSrc = removeSpecialSymbol.split('\n');
  const filterSource = splitSrc.filter(str => str !== '' && str !== '   ');
  const trimSource = filterSource.map(strin => strin.trim());

  const arrKeys = [];
  const arrValues = [];
  const resultObject = {};

  for (let i = 0; i < trimSource.length; i++) {
    arrValues.push(trimSource[i].slice(trimSource[i].indexOf(':') + 1).trim());
    arrKeys.push(trimSource[i].slice(0, trimSource[i].indexOf(':')).trim());

    resultObject[arrKeys[i]] = arrValues[i];
  }

  return resultObject;
}

module.exports = convertToObject;
