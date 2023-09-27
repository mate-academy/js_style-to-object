'use strict';

function convertToObject(sourceString) {
  const SplitdArr = sourceString.split(';').map((str) => (str.split(':')
    .map((leftStr) => (leftStr.trim()))));
  const outputObject = SplitdArr.reduce((obj, [key, value]) => {
    obj[key] = value;

    return obj;
  }, {});

  for (const key in outputObject) {
    if (outputObject[key] === undefined || outputObject[key] === null) {
      delete outputObject[key];
    }
  }

  return outputObject;
}

module.exports = convertToObject;
