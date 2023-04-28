'use strict';

function convertToObject(sourceString) {
  const propertyiesArr = sourceString.split(';');
  const propertiesObj = {};
  const splited = [];

  for (const property of propertyiesArr) {
    const splitFirts = property.split('\n');
    
    splited.push(splitFirts[splitFirts.length - 1].trim().split(':'));
  }

  const filterEmptyElem = splited.filter(el => el[0] !== '').sort();

  for (let i = 0; i < filterEmptyElem.length; i++) {
    const key = filterEmptyElem[i][0].trim();
    const value = filterEmptyElem[i][1].trim();

    propertiesObj[key] = value;
  }

  return propertiesObj;
}

module.exports = convertToObject;
