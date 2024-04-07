'use strict';

function convertToObject(sourceString) {
  const linesOfString = sourceString
    .split(';')
    .filter((line) => {
      return line.includes(':');
    })
    .map((line) => {
      const lineProperties = line.split(':').map((property, propertyIndex) => {
        return property.trim();
      });

      return lineProperties;
    });

  const cssProperties = linesOfString.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
