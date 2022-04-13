'use strict';

function convertToObject(sourceString) {
  const arrayProperties = sourceString.split(';')
    .map(property => property.split(':'));
  const style = {};

  arrayProperties.forEach(property => {
    if (property.length === 2) {
      const key = property[0].trim();
      const value = property[1].trim();

      style[key] = value;
    }
  });

  return style;
}

module.exports = convertToObject;
