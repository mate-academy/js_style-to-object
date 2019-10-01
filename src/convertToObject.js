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
  stylesList.pop();

  const stylesObj = {};

  stylesList.forEach(e => {
    const property = e.match(/\S.+(?=:)/g).join('');
    const value = e.match(/(?<=:\s).*/g).join('');
    stylesObj[property] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
