'use strict';

function convertToObject(sourceString) {
  const result = {};
  const newSourseString = sourceString.trim().split(';');

  newSourseString
    .filter(elem => elem.trim())
    .forEach(elem => {
      const [property, value] = elem.split(':');

      result[property.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
