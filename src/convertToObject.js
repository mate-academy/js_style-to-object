'use strict';

function convertToObject(sourceString) {
  const object = {};
  const allPropertiesArray = sourceString.split(';');

  allPropertiesArray.forEach(style => {
    if (style.includes(':')) {
      const eachProperty = style.split(':');

      object[eachProperty[0].trim()] = eachProperty[1].trim();
    }
  });

  return object;
}

module.exports = convertToObject;
