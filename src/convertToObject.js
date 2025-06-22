'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splArr = sourceString.split(';');

  for (let i = 0; i < splArr.length; i++) {
    splArr[i] = splArr[i].trim();
  }

  const arrNoVoid = splArr.filter((command) => command !== '');

  const finalArr = [];

  // const finalArr = arrNoVoid.split(':')
  for (let i = 0; i < arrNoVoid.length; i++) {
    finalArr[i] = arrNoVoid[i].split(':');
    finalArr[i][0] = finalArr[i][0].trim();
    finalArr[i][1] = finalArr[i][1].trim();
  }

  const arrObj = Object.fromEntries(finalArr);

  // const finFinArr = finalArr.reduce((acc, [key, value]) => {
  //     acc[key] = value;
  //     return acc;
  // },0);
  return arrObj;
}

module.exports = convertToObject;
