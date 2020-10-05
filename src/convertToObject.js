'use strict';

function convertToObject(sourceString) {
  const splittedSourceString = sourceString.split(';');
  const resultString = {};

  for (const rules of splittedSourceString) {
    if (rules.trim()) {
      const key = rules.split(':')[0].trim();
      const value = rules.split(':')[1].trim();

      resultString[key] = value;
    }
  }

  return resultString;
}

module.exports = convertToObject;
