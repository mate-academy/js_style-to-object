'use strict';

function convertToObject(sourceString) {
  const formatedStyles = {};

  let propertyArray = sourceString.replace(/[\n]/gi, '').split(';');

  propertyArray = propertyArray.filter(element => element.length > 2);

  propertyArray.map((element) => {
    const key = element.slice(0, element.indexOf(':')).trim();
    const value = element
      .slice(element.indexOf(':') + 1, element.length)
      .trim();

    formatedStyles[key] = value;
  });

  return formatedStyles;
}

module.exports = convertToObject;
