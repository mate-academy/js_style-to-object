'use strict';

function convertToObject(sourceString) {
  const stringSplit = sourceString.split(';');
  const styleCss = stringSplit
    .reduce((result, style) => {
      const [key, value] = style.split(':')
        .map(part => part.trim());

      if (key && value) {
        result[key] = value;
      }

      return result;
    }, {});

  return styleCss;
}

module.exports = convertToObject;
