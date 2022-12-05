'use strict';

function convertToObject(sourceString) {
  const splittedSourceString = sourceString.split(';');

  return splittedSourceString.reduce((finalCss, currentCssProperty) => {
    if (currentCssProperty.trim().length) {
      const splittedCssProperty = currentCssProperty.split(':');
      const key = splittedCssProperty[0].trim();
      const value = splittedCssProperty[1].trim();

      finalCss[key] = value;
    }

    return finalCss;
  }, {});
}

module.exports = convertToObject;
