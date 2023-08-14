'use strict';

function convertToObject(sourceString) {
  const lines = sourceString.split(';').map((line) => line.trim());
  const cleanLines = lines.map((line) => {
    const parts = line.split(':').map((subPart) => subPart.trim());

    return parts;
  });

  const stylesObject = {};

  cleanLines.forEach((parts) => {
    const [key, value] = parts;

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
