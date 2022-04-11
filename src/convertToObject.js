'use strict';

function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const styleList = {};

  splitString.forEach(item => {
    if (item.trim().length) {
      const parameter = item.split(':');
      const resultKey = parameter[0].trim();
      const resultValue = parameter[1].trim();

      styleList[resultKey] = resultValue;
    }
  });

  return styleList;
}

module.exports = convertToObject;
