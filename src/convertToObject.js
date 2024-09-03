'use strict';

function convertToObject(sourceString) {
  const finalStyle = {};

  sourceString.split(';').forEach((part) => {
    if (part.trim()) {
      const [command, value] = part.split(':');

      finalStyle[command.trim()] = value.trim();
    }
  });

  return finalStyle;
}

module.exports = convertToObject;
