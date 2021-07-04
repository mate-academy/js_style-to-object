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
