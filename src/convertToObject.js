'use strict';

const stylesString = require('./stylesString');

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = stylesString.split(';');
  const stylesItem = [];
  const stylesObj = {};

  stylesArr.forEach(string => {
    stylesItem.push(string.trim().split(':'));
  });

  stylesItem.forEach(element => {
    if (element[1] !== undefined) {
      stylesObj[element[0].trim()] = element[1].trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
