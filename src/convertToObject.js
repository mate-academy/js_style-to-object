'use strict';

function convertToObject(sourceString) {
  const linesOfString = sourceString.split(';');

  const propertiesArray = linesOfString.reduce((accumulator, line) => {
    if (line.includes(':')) {
      const propertyPair = line
        .split(':')
        .map((property) => property.trim());
      const cssProperty = { key: propertyPair[0], value: propertyPair[1] };

      accumulator.push(cssProperty);
    }

    return accumulator;
  }, []);

  const cssProperties = propertiesArray.reduce((acc, { key, value }) => {
    acc[key] = value;

    return acc;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
