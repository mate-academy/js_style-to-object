'use strict';

function convertToObject(sourceString) {
  const stylesInObject = {};
  const newSourseString = sourceString.trim().split(';');

  newSourseString
    .filter(elem => elem.trim())
    .forEach(elem => {
      const [property, value] = elem.split(':');

      stylesInObject[property.trim()] = value.trim();
    });

  return stylesInObject;
}

module.exports = convertToObject;
