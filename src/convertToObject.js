'use strict';

function convertToObject(sourceString) {
  const convertedObject = {};

  const sourseArr = sourceString
    .replace(/;/g, '')
    .split('\n')
    .filter(item => item.includes(':')
    );

  const assignProperty = (param) => {
    const property = param
      .split(':')
      .map(prop => prop.trim());

    convertedObject[property[0]] = property[1];

    return convertedObject;
  };

  sourseArr.forEach(assignProperty);

  return convertedObject;
}

module.exports = convertToObject;
