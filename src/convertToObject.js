'use strict';

function convertToObject(sourceString) {
  const styleAndPropArr = sourceString
    .replace(/\n/g, '')
    .split(';')
    .map(item => item.trim().split(':'))
    .filter(arr => arr.length > 1);

  return styleAndPropArr.reduce((stylesObj, style) => {
    stylesObj[style[0].trim()] = style[1].trim();

    return stylesObj;
  }, {});
}

module.exports = convertToObject;
