'use strict';

function convertToObject(sourceString) {
  const start = sourceString.split(';');
  const newS = {};

  for (const x of start) {
    const correctInput = x.indexOf(':');

    if (correctInput !== -1) {
      const key = x.slice(0, correctInput).trim();
      const value = x.slice(correctInput + 1).trim();

      newS[key] = value;
    }
  }

  return newS;
}

module.exports = convertToObject;
