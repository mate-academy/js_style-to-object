'use strict';

 function convertToObject(sourceString) {
  const splittedSourceString = sourceString.split(';');
  const result = {};

  splittedSourceString.forEach(string => {
    const splittedString = string.split(':');

    if (splittedString[1] === undefined) {
      return;
    }

    result[splittedString[0].trim()] = splittedString[1].trim();
  });

  return result;
}

module.exports = convertToObject;
