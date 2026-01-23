'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => {
      const colonIndex = item.indexOf(':');

      if (colonIndex === -1) {
        return null;
      }

      const key = item.slice(0, colonIndex).replace(/^\s+|\s+$/g, '');

      const value = item.slice(colonIndex + 1).replace(/^\s+|\s+$/g, '');

      if (!key || !value) {
        return null;
      }

      return [key, value];
    })
    .filter(Boolean)
    .reduce((styleObject, [key, value]) => {
      styleObject[key] = value;

      return styleObject;
    }, {});
}

module.exports = convertToObject;
