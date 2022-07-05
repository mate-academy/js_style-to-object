'use strict';

function convertToObject(sourceString) {
  const cssProperties = {};
  const styleArr = sourceString
    .split(';')
    .map(el => el.trim().split(':'))
    .filter(arr => arr.length > 1);

  for (const style of styleArr) {
    const key = style[0].trim();
    const value = style[1].trim();

    cssProperties[key] = value;
  }

  return cssProperties;
}

module.exports = convertToObject;
