'use strict';

function convertToObject(sourceString) {
  const cssPropertiesInObject = {};
  const cssProperties = sourceString.split(';')
    .map(property => property.trim().split(':'))
    .map(property => property.map(part => part.trim()));

  for (const property of cssProperties) {
    if (property.length < 2) {
      continue;
    } else {
      cssPropertiesInObject[property[0]] = property[1];
    }
  }

  return cssPropertiesInObject;
}

module.exports = convertToObject;
