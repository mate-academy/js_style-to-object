'use strict';

function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .reduce((parsedResult, declaration) => {
      const semicolonsIndex = declaration.indexOf(':');
      const rule = declaration.slice(0, semicolonsIndex).trim();
      const value = declaration.slice(semicolonsIndex + 1).trim();

      if (rule && value) {
        parsedResult[rule] = value;
      }

      return parsedResult;
    }, {});
}







