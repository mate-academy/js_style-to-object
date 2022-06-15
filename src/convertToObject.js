'use strict';

function convertToObject(sourceString) {
  const stylesObj = {};
  let stylesArr = sourceString.split(';');

  stylesArr = stylesArr.map(
    string => string.trim().split(':')
  ).filter(
    prop => prop.length === 2
  );

  for (const style of stylesArr) {
    stylesObj[style[0].trim()] = style[1].trim();
  }

  return stylesObj;
}

module.exports = convertToObject;
