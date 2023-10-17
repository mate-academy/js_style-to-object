'use strict';

function convertToObject(sourceString) {
  const noTransfer = sourceString.replace(/\n/g, '');
  const sourceArr = noTransfer.split(';');
  const result = {};

  for (let i = 0; i < sourceArr.length; i++) {
    const arrayValue = sourceArr[i].split(':');

    if (arrayValue[1] !== undefined) {
      result[arrayValue[0].trim()] = arrayValue[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
