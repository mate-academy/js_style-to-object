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
  // write your code here
  const arrCSS = sourceString.split(';').map(x => x.trim().split(':'));

  const trimEl = arrCSS.map(arr => arr.map(el => el.trim()));

  const filterArrCSS = trimEl.filter(x => x.length >= 2);

  const arrToObj = filterArrCSS.reduce((prev, x) => ({
    ...prev,
    [x[0]]: x[1],
  }), {});

  return arrToObj;
}

module.exports = convertToObject;
