'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(i => i.split(':'))
    .filter(el => el.length === 2)
    .reduce((acc, cur) => {
      acc[cur[0].trim()] = cur[1].trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
