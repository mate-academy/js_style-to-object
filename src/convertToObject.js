'use strict';

function convertToObject(sourceString) {
  const result = {};

  let sourceStringCopy = sourceString;

  for (let i = 0; i < sourceStringCopy.length; i++) {
    sourceStringCopy = sourceStringCopy.replace('\n', '');
  }

  sourceStringCopy.split(';')
    .filter(x => x.length > 5)
    .map(x => x.split(':'))
    .map(x => {
      result[x[0].trim()] = x[1].trim();
    });

  return result;
}

module.exports = convertToObject;
