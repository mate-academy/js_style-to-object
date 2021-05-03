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
  const clearArr = sourceString
    .split(';').map(
      property => property
        .split('')
        .filter(name => name !== '\n')
        .join('')
    ).filter(elem => elem !== '')
    .map(
      property => property
        .split(':')
        .map(elem => elem.trim())
    ).filter(prop => prop.length > 1);

  const cssPropertyesObj = {};

  clearArr.map(prop => {
    cssPropertyesObj[prop[0]] = prop[1];
  });

  return cssPropertyesObj;
}

module.exports = convertToObject;
