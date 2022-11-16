'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.split(';')
    .map(style => style.trim())
    .filter(style => style !== '')
    .map(style => style.split(':').map(word => word.trim()))
    .reduce((prev, style) => {
      return {
        ...prev,
        [style[0]]: style[1],
      };
    }, {});

  return styles;
}

module.exports = convertToObject;
