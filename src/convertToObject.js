'use strict';

function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || !trimmedLine.includes(':')) {
      return;
    }

    const parts = trimmedLine.split(':');
    const key = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
