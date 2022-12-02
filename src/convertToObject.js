'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '')
    .map(style => style.split(':').map(word => word.trim()))
    .reduce((prev, style) => {
      return {
        ...prev,
        [style[0]]: style[1],
      };
    }, {});
}

module.exports = convertToObject;
