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
  const stylesList = sourceString.trim().split(';');

  const stylesObj = {};

  for (let i = 0; i < stylesList.length - 1; i++) {
    const property = stylesList[i].match(/\S.+(?=:)/g).join('');
    const value = stylesList[i].match(/(?<=:\s).*/g).join('');
    stylesObj[property] = value;
  }

  return stylesObj;
}

module.exports = convertToObject;
