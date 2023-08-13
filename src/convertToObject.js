'use strict';

function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .filter(style => style.trim() !== '')
    .reduce((styles, stylePair) => {
      const [key, value] = stylePair.split(':');

      if (key && value) {
        styles[key.trim()] = value.trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
