'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';\n')
    .map(element => element.split(':'))
    .filter(property => property.length === 2)
    .reduce((stylesObject, [key, value]) => {
      stylesObject[key.trim()] = value.trim();

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
