'use strict';

function convertToObject(sourceString) {
  const sortedSourceArray = sourceString
    .replace(/\s+/g, ' ')
    .trim()
    .split(';');

  const createObject = (prev, propertyString) => {
    const parametries = propertyString.split(':');
    const property = parametries[0];
    const value = parametries[1];

    if (!property || !value) {
      return { ...prev };
    }

    return {
      ...prev,
      [property.trim()]: value.trim(),
    };
  };

  return sortedSourceArray.reduce(createObject, {});
}

module.exports = convertToObject;
