'use strict';

function convertToObject(sourceString) {
  const splittedSourceString = sourceString.split(';');
  const cssRules = {};

  for (const rules of splittedSourceString) {
    if (rules.trim()) {
      const key = rules.split(':')[0].trim();
      const value = rules.split(':')[1].trim();

      cssRules[key] = value;
    }
  }

  return cssRules;
}

module.exports = convertToObject;
