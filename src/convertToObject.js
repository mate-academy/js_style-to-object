'use strict';

function convertToObject(sourceString) {
  // write your code here
  const cssParams = {};
  // write your code here
  const splitByNewLine = sourceString.split(';');

  for (let i = 0; i < splitByNewLine.length; i++) {
    const lines = splitByNewLine[i].trim().split(':');
    const clearLines = lines.map(el => el.trim());

    if (clearLines[1]) {
      cssParams[clearLines[0]] = clearLines[1];
    }
  }

  return cssParams;
}

module.exports = convertToObject;
