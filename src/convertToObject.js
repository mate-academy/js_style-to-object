'use strict';

function convertToObject(sourceString) {

  return sourceString
    .split(';')
    .reduce((finalStyle, part) => {
      if (part.trim()) {
        const [command, value] = part.split(':');

        finalStyle[command.trim()] = value.trim();
      }

      return finalStyle;
  }, {});
}

module.exports = convertToObject;
