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

  stylesItem.forEach(el => {
    if (el[1] !== undefined) {
      stylesObj[el[0].trim()] = el[1].trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
