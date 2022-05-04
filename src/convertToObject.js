'use strict';

function convertToObject(sourceString) {
  const splitedProperties = sourceString.split(';');
  const stylesAsArrays = splitedProperties
    .filter(element => element.trim() !== '');

  const stylesObject = {};

  stylesAsArrays.forEach(element => {
    const pairOfElement = element.split(':');

    const key = pairOfElement[0].trim();
    const value = pairOfElement[1].trim();

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
