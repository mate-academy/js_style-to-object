'use strict';

function convertToObject(sourceString) {
  const sortedSourceArray = sourceString
    .replace(/\s+/g, ' ')
    .trim()
    .split(';')
    .map(splitProperty => splitProperty.split(':'));

  const createObject = (prev, [ property, value ]) => {
    if (!property || !value) {
      return { ...prev };
    }

    return {
      ...prev,
      [property.trim()]: value.trim(),
    };
  };

  const sourceObject = sortedSourceArray.reduce(createObject, {});

  return sourceObject;
}

module.exports = convertToObject;
