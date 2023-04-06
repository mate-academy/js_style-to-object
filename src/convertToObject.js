'use strict';

function convertToObject(sourceString) {
  const lineSplitted = sourceString.split('\n');
  const stylesObject = lineSplitted.reduce((start, line) => {
    const lineTrimmed = line.trim();

    if (lineTrimmed === '' || lineTrimmed.startsWith(';')) {
      return start;
    }

    const [propertyName, propertyValue] = lineTrimmed
      .split(':')
      .map(cssProperty => cssProperty.trim())
      .map(propertyValueFixed => propertyValueFixed
        .trim()
        .replace(/\s*;\s*$/, ''));

    return {
      ...start,
      [propertyName]: propertyValue,
    };
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
