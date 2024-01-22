'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  // Regular expression to match CSS property-value pairs
  const regex = /([a-zA-Z-]+)\s*:\s*([^;]+);/g;

  // Execute the regular expression on the source string
  let match;

  while ((match = regex.exec(sourceString)) !== null) {
    const propertyName = match[1].trim();
    const propertyValue = match[2].trim();

    stylesObject[propertyName] = propertyValue;
  }

  return stylesObject;
}

module.exports = convertToObject;
