'use strict';

function convertToObject(sourceString) {
  const cssStyle = sourceString
    .split(';')
    .reduce((prev, el) => {
      const [ key, value ] = el.split(':');

      if (key && value) {
        prev[key.trim()] = value.trim();
      }

      return prev;
    }, {});

  return cssStyle;
}

module.exports = convertToObject;
