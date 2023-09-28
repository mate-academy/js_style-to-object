'use strict';

function convertToObject(sourceString) {
  const arrays = sourceString.split(';');
  const resultOblect = {};

  for (let i = 0; i < arrays.length; i++) {
    const parts = arrays[i].split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      resultOblect[key] = value;
    }
  }

  return resultOblect;
}

module.exports = convertToObject;
