'use strict';

function convertToObject(sourceString) {
  const cssPropertiesInObject = sourceString.split(';')
    .map(property => property.trim().split(':'))
    .map(property => property.map(part => part.trim()))
    .filter(property => property.length > 1)
    .reduce(callback, {});

  return cssPropertiesInObject;
}

function callback(accumulator, property) {
  const styleName = property[0];
  const styleValue = property[1];

  return {
    ...accumulator,
    [styleName]: styleValue,
  };
}
module.exports = convertToObject;
