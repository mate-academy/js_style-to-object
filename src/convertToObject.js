'use strict';

function convertToObject(sourceString) {
  const retObj = {};

  sourceString
    .split(';')
    .map(propArr => propArr.split(':'))
    .filter(prop => prop.length === 2)
    .forEach(prop => {
      const key = prop[0].trim();
      const value = prop[1].trim();

      retObj[key] = value;
    });

  return retObj;
}

module.exports = convertToObject;
