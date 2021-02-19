'use strict';

function convertToObject(sourceString) {
  const result = {};

  Array.from(new Set(sourceString.split(';')))
    .map(x => x.replace(['\n'], ''))
    .map(x => x.split(':'))
    .map(x => x.map(y => y.trim()))
    .map((style) => {
      if (style.length === 2) {
        result[style[0]] = style[1];
      }
    });

  return result;
}

module.exports = convertToObject;
