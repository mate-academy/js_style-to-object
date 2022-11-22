'use strict';

function convertToObject(sourceString) {
  const a = sourceString.split(';');
  const stylesObject = {};

  const properties = a.map((item) => item.split(':'));

  for (const line of properties) {
    if (line[1] !== undefined) {
      stylesObject[line[0].trim()] = line[1].trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
