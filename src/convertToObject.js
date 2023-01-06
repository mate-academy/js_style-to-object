'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};
  const styleAndPropArr = sourceString
    .replace(/\n/g, '')
    .split(';')
    .map(item => item.trim().split(':'))
    .filter(arr => arr.length > 1);

  styleAndPropArr
    .forEach(style => (
      stylesObject[style[0].trim()] = style[1].trim())
    );

  return stylesObject;
}

module.exports = convertToObject;
