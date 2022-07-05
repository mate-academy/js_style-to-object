'use strict';

function convertToObject(sourceString) {
  const callback = (prev, elem) => ({
    ...prev, [elem[0].trim()]: elem[1].trim(),
  });

  const cssProperties = sourceString
    .split(';')
    .map(el => el.trim().split(':'))
    .filter(arr => arr.length > 1)
    .reduce(callback, {});

  return cssProperties;
}

module.exports = convertToObject;
