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
  const filterSrc
     = sourceString.split('\n')
       .map(s => s.trim())
       .filter(s => s !== '' && s !== ';');

  const arrKeys = [];
  const arrValues = [];
  const resultObject = {};

  for (let i = 0; i < filterSrc.length; i++) {
    arrValues.push(filterSrc[i]
      .slice(filterSrc[i].indexOf(':') + 1, filterSrc[i].indexOf(';')).trim());
    arrKeys.push(filterSrc[i].slice(0, filterSrc[i].indexOf(':')).trim());

    resultObject[arrKeys[i]] = arrValues[i];
  }

  return resultObject;
}

module.exports = convertToObject;
