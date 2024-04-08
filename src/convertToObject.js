'use strict';

function convertToObject(sourceString) {
  const linesOfString = sourceString
    .split(';')
    .reduce((accumulator, line) => {
      if (line.includes(':')) {
        const lineProperties = line
          .split(':')
          .map((property) => property.trim());

        accumulator.push(lineProperties);
      }

      return accumulator;
  }, []);

  const cssProperties = linesOfString.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
