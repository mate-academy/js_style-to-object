'use strict';

function convertToObject(sourceString) {
  const convertedSource = {};

  sourceString
    .split(';')
    .filter(prop => (prop.trim().length !== 0))
    .map(prop => prop.split(':'))
    .forEach(
      prop => (
        convertedSource[prop[0].trim()] = prop[1].trim()
      )
    );

  return convertedSource;
}

module.exports = convertToObject;
