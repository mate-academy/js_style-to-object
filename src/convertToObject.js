'use strict';

function convertToObject(sourceString) {
  const objectStyles = sourceString
    .split(';')
    .filter(styleString => styleString.trim() !== '')
    .reduce((styleObj, styleString) => {
      const match = styleString.match(/^\s*([^:]+)\s*:\s*(.+)\s*$/);

      if (match) {
        styleObj[match[1].trim()] = match[2].trim();
      }

      return styleObj;
    }, {});

  return objectStyles;
}

module.exports = convertToObject;
