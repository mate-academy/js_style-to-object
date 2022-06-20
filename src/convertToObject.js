'use strict';

function convertToObject(sourceString) {
  const styleArr = sourceString.split(';')
    .map(strOfStyleArr => strOfStyleArr.trim().split(':'))
    .filter(styleItem => styleItem.length > 1);

  const stylesObject = {};

  styleArr.forEach(style => (stylesObject[style[0].trim()] = style[1].trim()));

  return stylesObject;
}

module.exports = convertToObject;
