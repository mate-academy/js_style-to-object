'use strict';

function convertToObject(sourceString) {
  const stylesObj = {};
  const formatedString = sourceString
    .split(';')
    .map(style => style.split(':'));

  formatedString.forEach(style => {
    if (style.length > 1) {
      const key = style[0].trim();
      const value = style[1].trim();

      stylesObj[key] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
