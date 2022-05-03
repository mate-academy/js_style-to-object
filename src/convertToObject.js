'use strict';

function convertToObject(sourceString) {
  const arrStyles = sourceString.split(';')
    .map(elem => elem.split(': '));
  const result = {};

  for (let i = 0; i < arrStyles.length; i++) {
    if (arrStyles[i].length > 1) {
      const key = arrStyles[i][0].trim();
      const value = arrStyles[i][1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
