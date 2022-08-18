'use strict';

function convertToObject(sourceString) {
  const sortedSourceArray = sourceString
    .replace(/\s+/g, ' ')
    .trim()
    .split(';')
    .map(splitProperty => splitProperty.split(':'))
    .filter(cleanUp => cleanUp.length > 1);

  const createObject = (prev, [ property, value ]) => {
    return {
      ...prev,
      [property.trim()]: value.trim(),
    };
  };

  const sourceObject = sortedSourceArray.reduce(createObject, {});

  return sourceObject;
}

module.exports = convertToObject;
