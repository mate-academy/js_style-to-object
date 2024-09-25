'use strict';

function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((element) => element.split(':'))
    .map((element) => element.map((str) => str.trim()))
    .filter((element) => element.length > 1)
    .reduce((res, [key, value]) => {
      res[key] = value;

      return res;
    }, {});

  return result;
}

module.exports = convertToObject;
