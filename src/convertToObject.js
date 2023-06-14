'use strict';

function convertToObject(sourceString) {
  const prevPropertiesArray = sourceString
    .trim()
    .split(';');

  const resultStylesObject = {};

  const propertiesArray = [];

  prevPropertiesArray.forEach((property) => {
    const propertyWithoutSpaces = property.trim();

    if (propertyWithoutSpaces) {
      propertiesArray.push(propertyWithoutSpaces.split(':'));
    }
  });

  propertiesArray.forEach((property) => {
    resultStylesObject[property[0].trimRight()] = property[1].trimLeft();
  });

  return resultStylesObject;
}

module.exports = convertToObject;
