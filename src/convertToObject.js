'use strict';

function convertToObject(sourceString) {
  const formatedStyles = {};

  const propertyArray = sourceString.replace(/[\n]/gi, '').split(';');

  const filteredProperties = propertyArray
    .filter(element => element.length > 2);

  filteredProperties.forEach((element) => {
    const keysAndValues = element.split(':');
    const key = keysAndValues[0].trim();
    const value = keysAndValues[1].trim();

    formatedStyles[key] = value;
  });

  return formatedStyles;
}
module.exports = convertToObject;
