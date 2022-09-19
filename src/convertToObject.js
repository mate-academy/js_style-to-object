'use strict';

function convertToObject(sourceString) {
  const stylesObj = {};
  const stylesArr = sourceString.split(';')
    .map(prop => prop.trim().split(':'));

  for (const style of stylesArr) {
    if (style[0] && style[1]) {
      stylesObj[style[0].trim()] = style[1].trim();
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
