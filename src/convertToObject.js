'use strict';

function convertToObject(sourceString) {
  const clearSpaces = str => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      if ((str[i] === ' ' && str[i + 1] === ' ') || str[i] === ';') {
        continue;
      } else {
        result += str[i];
      }
    }

    return result;
  };

  const splittedSource = sourceString.split('\n');
  const resultObject = {};

  for (const value of splittedSource) {
    if (value.length > 3) {
      const [styleProp, styleValue] = value.split(':');

      resultObject[styleProp.trim()] = clearSpaces(styleValue).trim();
    }
  }

  return resultObject;
}

module.exports = convertToObject;
