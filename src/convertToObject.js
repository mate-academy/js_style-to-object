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
  let stylesArray = sourceString.split(';');
  const stylesObject = {};

  stylesArray = stylesArray.map(item => item.trim());
  stylesArray = stylesArray.filter(item => item !== '');
  stylesArray = stylesArray.map(item => item.split(':'));
  stylesArray = stylesArray.map(item => item.map(i => i.trim()));

  for (let i = 0; i < stylesArray.length; i++) {
    stylesObject[stylesArray[i][0]] = stylesArray[i][1];
  }

  return stylesObject;
}

module.exports = convertToObject;
