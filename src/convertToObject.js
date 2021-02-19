'use strict';

function convertToObject(sourceString) {
  const result = {};

  Array.from(new Set(sourceString.split(';')))
    .map(style => style.replace(['\n'], '').split(':').map(word => word.trim()))
    .map((style) => {
      if (style.length === 2) {
        result[style[0]] = style[1];
      }
    });

  return result;
}

module.exports = convertToObject;
