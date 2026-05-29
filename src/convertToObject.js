'use strict';

function convertToObject(sourceString) {
  const stringSeperate = sourceString.split(';');

  return stringSeperate.reduce((acc, line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || !trimmedLine.includes(':')) {
      return acc;
    }

    const colonIndex = trimmedLine.indexOf(':');
    const prop = trimmedLine.slice(0, colonIndex).trim();
    const value = trimmedLine
      .slice(colonIndex + 1)
      .replace(/;$/, '')
      .trim();

    return { ...acc, [prop]: value };
  }, {});
}

module.exports = convertToObject;
