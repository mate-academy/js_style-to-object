'use strict';

function convertToObject(sourceString) {
  const arraySourcesString = sourceString.split(';');
  const objectOfValues = {};

  arraySourcesString.forEach(element => {
    const arrayKeyValue = element.split(':');

    if (arrayKeyValue.length === 2) {
      objectOfValues[arrayKeyValue[0].trim()] = arrayKeyValue[1].trim();
    }
  });

  return objectOfValues;
}

module.exports = convertToObject;
