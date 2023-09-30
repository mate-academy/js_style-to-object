'use strict';

function convertToObject(sourceString) {
  const convertToArray = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.length > 0)
    .map((element) => {
      const colonIndex = element.indexOf(':');
      const key = element.slice(0, colonIndex).trim();
      const value = element.slice(colonIndex + 1).trim();

      return [key, value];
    });

  const result = convertToArray.reduce((accumulator, [key, value]) => {
    accumulator[key] = value;

    return accumulator;
  }, {});

  return result;
}

module.exports = convertToObject;
