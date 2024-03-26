'use strict';

function convertToObject(sourceString) {
  const styleObject = {};

  const pairs = sourceString.split(';');

  for (const pair of pairs) {
    const [property, value] = pair.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      styleObject[trimmedProperty] = trimmedValue;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
