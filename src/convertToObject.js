'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styleString) =>
      styleString
        .trim()
        .split(':')
        .map((styleStringItem) => styleStringItem.trim())
    )
    .filter((style) => style.length > 1)
    .reduce(
      (acc, [propertyName, propertyValue]) => ({
        ...acc,
        [propertyName]: propertyValue,
      }),
      {}
    );
}

module.exports = convertToObject;
