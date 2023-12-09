'use strict';

function convertToObject(sourceString) {
  const result = {};
  const tempString = sourceString.split(';');

  tempString.forEach((str) => {
    const tempArr = str.replace(/\n/g, '').split(':');

    for (let i = 0; i < tempArr.length; i++) {
      tempArr[i] = tempArr[i].trim();
    }

    if (tempArr[0] !== '') {
      result[tempArr[0]] = tempArr[1];
    }
  });

  return result;
}

module.exports = convertToObject;
