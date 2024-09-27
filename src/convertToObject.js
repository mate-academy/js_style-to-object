'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertingObject = {};
  const sourceArr = sourceString.split(';');
  sourceArr.pop();

  sourceArr.forEach((i) => {
    const convert = i.split(':');
    convertingObject[convert[0].trim()] = convert[1].trim();
  });

  return convertingObject;
}

module.exports = convertToObject;
