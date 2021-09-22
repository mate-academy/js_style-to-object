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
  const finalObj = {};
  const styleStr = sourceString.replace(/\n/g, '').replace(/ +/g, ' ').trim();
  let styleArr = styleStr.split(';');

  styleArr = styleArr.map(el => el.split(':'));

  for (let i = 0; i < styleArr.length; i++) {
    const key = String(styleArr[i][0]).trim();
    const value = String(styleArr[i][1]).trim();

    if (key !== '') {
      finalObj[key] = value;
    }
  }

  return finalObj;
}

module.exports = convertToObject;
