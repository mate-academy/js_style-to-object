'use strict';

function convertToObject(sourceString) {
  const stylesProperties = {};

  const properties = sourceString.split(';').filter(string =>
    string.includes(':'));

  properties.forEach(property => {
    const [key, value] = property.split(':');

    stylesProperties[key.trim()] = value.trim();
  });

  return stylesProperties;
}

module.exports = convertToObject;
