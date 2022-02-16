'use strict';

function convertToObject(sourceString) {
  const cssStyles = {};
  const arrOfStyles = sourceString
    .split(';')
    .map(elem => elem.split(':'))
    .filter(elem => elem.length > 1);

  for (const style of arrOfStyles) {
    cssStyles[style[0].trim()] = style[1].trim();
  }

  return cssStyles;
}

module.exports = convertToObject;
