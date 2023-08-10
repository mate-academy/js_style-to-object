'use strict';

function convertToObject(sourceString) {
  const sccStyles = {};

  sourceString
    .split(';\n')
    .forEach(item => {
      if (item.trim().length > 2) {
        const [key, value] = (item.trim().split(': '));

        sccStyles[key.trim()] = value.trim();
      }
    });

  return sccStyles;
}

module.exports = convertToObject;
