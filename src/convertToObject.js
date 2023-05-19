'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  const stylesArr = sourceString
    .split(';')
    .map(styleLine => styleLine.trim())
    .filter(elem => elem);

  stylesArr.forEach(style => {
    const styleLine = style.split(':');
    const key = styleLine[0].trim();
    const value = styleLine[1].trim();

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
